import Image from 'next/image'
import MainHero from '/public/illustrations/web3/PNG/VDAO-web3-hero.png'
import ProfilePic from 'public/icons/blog/createdByLogo.svg'
import {
  expenditureData,
  horizontalBarchart,
  latestDonationData,
  membersData,
  onlineMembersData,
  verticalBarchartDesktop,
  LinearChart,
  verticalBarchartMobile,
} from '../../mockData'
import { Section } from '../../../layout/section'
import dynamic from 'next/dynamic'
import { Dispatch, SetStateAction, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type ProfileProps = {
  setOpenProfile: Dispatch<SetStateAction<boolean>>
}

export function StatisticsHomeComponent() {
  const [period, setPeriod] = useState({ value: 'week', state: true })
  return (
    <Section className=' col-span-12 mb-28 w-[100%] rounded-2xl bg-vdao-dark py-10 px-5 lg:py-12 lg:pr-16 lg:pl-12'>
      <div className='lg:pr-10'>
        <div className='items-start justify-between md:flex'>
          <div className='mt-[53] w-full md:w-7/12'>
            <div className='mb-[55px] flex justify-between text-white md:ml-6 md:items-center'>
              <div className='satoshi text-xl font-bold text-white md:mt-0 md:text-[22px]'>Treasury</div>
              <div className='ml-auto mr-[40px] flex flex-col gap-[14px] md:ml-0 md:mr-0 md:flex-row md:items-center md:gap-10'>
                <div className='flex items-center'>
                  <div className='mr-2.5 h-2.5 w-2.5 rounded-full bg-vdao-light md:h-[15px] md:w-[15px]'></div>
                  <div className='satoshi text-sm font-normal text-white md:mt-0'>USDC</div>
                </div>
                <div className=' flex items-center'>
                  <div className='mr-2.5 h-2.5 w-2.5 rounded-full bg-vdao-pink md:h-[15px] md:w-[15px]'></div>
                  <div className='satoshi text-sm font-normal text-white'>ETH</div>
                </div>
              </div>
              <div className='relative flex h-fit cursor-pointer items-center gap-2.5 rounded-[10px] bg-white py-[6px] px-[15px]'>
                <div
                  onClick={() => setPeriod({ ...period, state: !period.state })}
                  className='satoshi  font-bold capitalize  text-vdao-dark md:text-sm'
                >
                  {period.value}
                </div>
                <FaChevronDown
                  onClick={() => setPeriod({ ...period, state: !period.state })}
                  className='text-[15px] text-vdao-light'
                />
                <div
                  className={`absolute  left-0 z-50 w-full overflow-hidden rounded-[10px] bg-white ease-[1s] ${
                    period.state ? 'top-[110%] block opacity-100' : 'top-[130%] hidden opacity-0'
                  }`}
                >
                  {['week', 'month', 'year'].map((text, index) => {
                    return (
                      <div
                        onClick={() => setPeriod({ value: text, state: false })}
                        key={index}
                        className='satoshi py-[6px] px-[15px] text-sm font-bold capitalize  text-vdao-dark ease-in  hover:bg-[rgba(0,0,0,.1)]'
                      >
                        {text}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <Chart
              options={LinearChart.options}
              series={LinearChart.series}
              type='line'
              width={'100%'}
              height={'333px'}
            />
          </div>
          <div>
            <div className='satoshi mt-[60px] text-[22px] font-bold text-white md:mt-0 md:text-2xl'>Latest</div>
            <div className=' mt-[32px] flex w-full flex-col gap-5 md:gap-[43px] lg:mt-[30px] lg:w-72'>
              {' '}
              {latestDonationData.map(({ title, text, amount }, index) => {
                return (
                  <div key={index} className='flex justify-between'>
                    <div>
                      <div className='satoshi text-lg font-bold leading-6 text-vdao-light'>{title}</div>
                      <div className='satoshi text-sm font-normal leading-5 text-white'>{text}</div>
                    </div>
                    <div>
                      <div className='satoshi text-sm font-bold leading-5 text-[#f8f2ff]'>{amount}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <article className='mt-12 flex flex-col justify-end gap-5 md:flex-row md:gap-10'>
          {expenditureData.map(({ title, amount, percent }, index) => {
            return (
              <div className='rounded-2xl bg-white p-5 md:p-8'>
                <div className='satoshi text-[22px] font-medium leading-6 text-vdao-dark md:text-2xl md:font-bold lg:leading-5'>
                  {' '}
                  {title}
                </div>
                <div className='mt-4 flex items-start '>
                  <div className='satoshi mr-2 text-[26px] font-medium leading-6 text-vdao-dark md:text-3xl md:font-bold lg:mr-2.5 lg:leading-8'>
                    {amount}
                  </div>
                  <div className='satoshi mr-2 text-xl font-medium leading-5 text-vdao-dark md:font-bold lg:mr-5'>
                    USD
                  </div>
                  <div
                    className={`satoshi flex items-center gap-2 rounded-2xl bg-vdao-light py-1.5 px-2 text-sm font-bold leading-5 text-vdao-dark lg:mr-5 lg:text-xl ${
                      index > 0 && 'bg-vdao-pink'
                    }`}
                  >
                    {percent}
                    <img
                      src='/illustrations/home/SVG/Arrow 6.svg'
                      alt=''
                      className={` ${index > 0 && 'rotate-180'} h-4 w-auto`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </article>
        <div className=' mt-[60px] flex flex-col items-end justify-between md:flex-row'>
          <div className='w-full md:w-7/12'>
            <div className='mb-[35px] flex justify-between text-white md:ml-5 md:items-center md:justify-start'>
              <div className='satoshi text-xl font-bold text-white md:mt-0 md:mr-28 md:text-[22px]'>New User</div>
              <div className='flex flex-col gap-[14px] md:flex-row'>
                <div className=' flex items-center'>
                  <div className='mr-2.5 h-[15px] w-[15px] rounded-full bg-vdao-light'></div>
                  <div className='satoshi text-xl font-normal text-white md:mt-0 md:text-sm'>Join Member</div>
                </div>
                <div className=' flex items-center'>
                  <div className='mr-2.5 h-[15px] w-[15px] rounded-full bg-[#33A1AA]'></div>
                  <div className='satoshi text-xl font-normal text-white md:mt-0 md:text-sm'>Invested</div>
                </div>
              </div>
            </div>

            <Chart
              options={verticalBarchartDesktop.options}
              series={verticalBarchartDesktop.series}
              type='bar'
              class
              width={'100%'}
              height={'333px'}
            />
          </div>
          <div className='mt-[60px] w-full  md:mt-0 md:w-3/12'>
            <div className='mb-[30px] flex items-center text-white md:mb-[35px]'>
              <div className='satoshi text-xl font-bold text-white md:text-[22px]'>Weekly Purchases</div>
            </div>
            <Chart
              options={horizontalBarchart.options}
              series={horizontalBarchart.series}
              type='bar'
              class
              width={'100%'}
              height={'353px'}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export function NewMembersComponent() {
  return (
    <Section className=' col-span-12 w-full justify-between rounded-2xl bg-vdao-dark px-5 py-10 md:col-span-5 md:flex md:px-10 md:pt-14 md:pb-10 lg:mb-0 lg:block'>
      {/* NEW MEMBERS */}
      <div className='lg:px-10'>
        <div className='flex items-center gap-2.5'>
          <div className='satoshi text-[22px] font-bold text-white'>New Members</div>
          <div className='satoshi text-lg font-normal text-white'>{membersData.length}</div>
        </div>
        <div className=''>
          {membersData.map(({ img, name, category, date, time }, index) => {
            return (
              <div className='mt-5 flex items-center justify-between md:w-80 lg:w-auto'>
                <div className='mr-6 flex items-center'>
                  <img src={img} alt='' className='mr-4 rounded-full md:h-10 md:w-10 lg:mr-2.5' />
                  <div>
                    <div className='satoshi text-lg font-medium leading-5 text-vdao-light'>{name}</div>
                    <div className='satoshi text-sm font-normal leading-5 text-white'>{category}</div>
                  </div>
                </div>
                <div className=''>
                  <div className='satoshi flex justify-end text-sm font-medium leading-5 text-[#F8F2FF]'>{date}</div>
                  <div className='satoshi flex justify-end text-sm font-normal leading-5 text-[#F8F2FF]'>{time}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ONLINE MEMBERS */}
      <div className='lg:px-10'>
        <div className=' mt-10 flex items-center gap-2.5 md:mt-0 lg:mt-10'>
          <div className='satoshi text-[22px] font-bold text-white'>Online</div>
          <div className='satoshi text-lg font-normal text-white'>{onlineMembersData.length}</div>
        </div>

        <article className='mt-8 flex flex-wrap gap-5 md:w-80 lg:w-auto'>
          {onlineMembersData.map(({ name, img }, index) => {
            return (
              <div className=' col-span-3 w-20 overflow-hidden'>
                <img src={img} alt='' className='mx-auto h-10 w-10 rounded-full' />
                <div className='satoshi w-20 text-center text-sm font-normal text-white md:text-lg'>{name}</div>
              </div>
            )
          })}
        </article>
      </div>
    </Section>
  )
}

export function ProfileHomeComponent({ setOpenProfile }: ProfileProps) {
  return (
    <Section className='col-span-12 flex w-full flex-col rounded-2xl bg-vdao-dark pr-3.5 pt-5 pl-5 md:col-span-7 md:pt-10 md:pl-5 md:pr-8 md:pb-20'>
      {/* View Profile Button */}
      <div
        className='satoshi ml-auto cursor-pointer text-sm font-bold text-white underline md:text-base lg:pr-10'
        onClick={() => setOpenProfile(true)}
      >
        View Profile
      </div>

      {/* User Info */}
      <div className='flex flex-col md:gap-5 lg:mx-8'>
        <div className='flex gap-3'>
          <Image src={ProfilePic} alt='Profile Picture' className='h-14 w-14 rounded-full' />
          <div className='flex flex-col'>
            <span className='satoshi text-[26px] font-bold leading-8 text-vdao-light'>Kris Millar</span>
            <span className='satoshi text-lg font-normal leading-6 '>0xd12512....92C</span>
          </div>
        </div>

        {/* Description */}
        <span className='satoshi mt-5 mr-7 text-lg leading-6 md:mr-0 md:w-9/12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices velit a nulla placerat, vitae
          accumsan mauris euismod. Nam semper dignissim est a sollicitudin. Vestibulum non ipsum tellus. Vivamus a eros
          nec sapien vestibulum.
        </span>

        {/* Guild & Pod */}
        <div className='mt-12 inline-grid grid-cols-[max-content_auto] gap-5 md:gap-6'>
          <span className='satoshi text-lg font-bold md:text-base'>Guild</span>
          <span className='satoshi text-lg font-bold text-vdao-light md:text-base'>DAO Operation Guild</span>
          <span className='satoshi text-lg font-bold md:text-base'>Pod</span>
          <span className='satoshi text-lg font-bold text-vdao-light md:text-base'>Regen Pod</span>
        </div>

        {/* Statistics */}
        <div className='my-10 grid  grid-cols-2 items-start gap-10 md:grid-cols-4 lg:mb-0 lg:gap-5'>
          {[
            {
              name: 'Votes Delegated',
              value: '251',
            },
            {
              name: 'Proposals Created',
              value: '31',
            },
            {
              name: 'Praise Score',
              value: '98',
            },
            {
              name: 'Discussions',
              value: '126',
            },
          ].map(stat => (
            <div className='flex flex-col items-center justify-center' key={stat.name}>
              <div className='satoshi flex h-32 w-32 items-center justify-center rounded-full border-[3px] border-vdao-light text-[32px] font-bold text-white'>
                {stat.value}
              </div>
              <span className='satoshi mt-2 text-center text-lg font-bold md:text-base'>{stat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function WelcomeComponent() {
  return (
    <Section className='relative mx-auto flex max-w-[1680px] flex-col-reverse items-center overflow-hidden md:h-auto md:flex-col md:pt-16'>
      <Image
        src={MainHero}
        alt='VDAO Web3 Hero'
        className='mb-24 translate-x-[40%] scale-[200%] md:mb-0 md:-translate-x-0 md:scale-100'
      />
      <h1 className='z-10 text-center text-5xl font-medium text-white md:absolute md:text-7xl'>
        Welcome to <br /> VDAO
      </h1>
    </Section>
  )
}