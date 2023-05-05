import React, { useState } from "react";

import Image from "next/image";

import logo from "public/logo/png/color.png";

import discord from "public/illustrations/socials/discord.svg";
import discordCircle from "public/illustrations/socials/discordCircle.svg";
import discourse from "public/illustrations/socials/discourse.svg";

import darkDiscourse from "public/illustrations/socials/darkDiscourse.svg";
import darkDiscord from "public/illustrations/socials/darkDiscord.svg";

import twitter from "public/illustrations/socials/twitter.svg";
import { Collapse, Divider, Tooltip } from "antd";
import { VDAOConnectButton } from "../walletconnect/connectbutton";
import Link from "next/link";
import { useRouter } from "next/router";
const { Panel } = Collapse;

type Props = {
  signatures?: number;
  className?: string;
  web2?: boolean;
  web3?:boolean
};

type NavigationElement = {
  name: string;
  link: string;
  children?: NavigationElement[];
};

const navigationElementsWeb2: NavigationElement[] = [
  { name: "Home", link: "/" },
  {
    name: "Participate",
    link: "/apply",
    children: [
      { name: "Apply", link: "/apply" },
      { name: "NFT Collection", link: "/nft" },
      { name: "Discord", link: "#" },
      { name: "Forum", link: "#" },
      { name: "Manifesto", link: "/manifesto" },
    ],
  },
  { name: "Get Funding", link: "/funding" },
  { name: "Donate", link: "/donate" },
  {
    name: "About",
    link: "/about",
    children: [
      { name: "About Us", link: "/about" },
      { name: "Whitepaper", link: "/whitepaper" },
      { name: "Analytics", link: "/analytics" },
      { name: "Blog", link: "/blog" },
    ],
  },
];

const navigationElementsWeb3: NavigationElement[] = [
  { name: "Home", link: "/" },
  {
    name: "Vote",
    link: "#",
    children: [
      { name: "Operational Proposals", link: "/app/proposals" },
      { name: "Grants Round", link: "/app/grants" },
      { name: "Steward Election", link: "/app/steward" },
      { name: "Forum Discussion", link: "#" },
    ],
  },
  { name: "Steward Profile", link: "/app/steward" },
  { name: "Prods Profile", link: "/app/pods" },
  { name: "Support", link: "/app/support" },
  { name: "Analytics", link: "/app/analytics" },
];

const Header = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={props.web2 ? "bg-white" : "bg-vdao-deep"}>
      {/* Desktop */}
      <div className="z-50 mx-auto hidden h-24 max-w-[1280px] items-center justify-between px-0 md:flex md:px-6 xl:px-0">
        <Link href="/">
          <Image src={logo} alt="VDAO" height={30} />
        </Link>
        <div
          className={
            "xl:ml-54 flex justify-between gap-9 " +
            (props.web2 ? "text-vdao-dark" : "text-white")
          }
        >
          {(props.web2 ? navigationElementsWeb2 : navigationElementsWeb3).map(
            (element) => (
              <Tooltip
                placement="bottomLeft"
                color="white"
                title={
                  element.children &&
                  element.children.length > 0 && (
                    <div className="flex flex-col gap-5 px-10 py-8 ">
                      {element.children?.map((child) => (
                        <Link
                          className="small-text !text-vdao-dark hover:opacity-80"
                          href={child.link}
                          key={child.name}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )
                }
                key={element.name}
              >
                <Link href={element.link}>{element.name}</Link>
              </Tooltip>
            )
          )}
        </div>
        <div className="hidden gap-7 lg:flex">
          <Image
            src={props.web2 ? discourse : darkDiscourse}
            alt="VDAO"
            width={30}
            height={30}
            className="hidden md:block"
          />
          <Image
            src={props.web2 ? discordCircle : darkDiscord}
            alt="VDAO"
            width={30}
            height={30}
            className="hidden md:block"
          />
        </div>

        <VDAOConnectButton
          web2={props.web2}
          className={
            props.web2
              ? "border-vdao-dark text-vdao-dark"
              : "border-vdao-light text-vdao-light"
          }
        />
      </div>

      {/* Mobile */}
      <div className="flex w-screen items-center justify-between py-16 px-4 md:hidden">
        <Link href="/">
          <Image src={logo} alt="VDAO" height={30} />
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="rounded-md px-2 text-vdao-dark transition-all focus:outline-none focus:ring-2 focus:ring-vdao-dark focus:ring-offset-2"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}

      <div
        className={
          "absolute z-50 w-screen -translate-x-full transition-all md:hidden " +
          (props.web2 ? "bg-white " : "bg-vdao-deep ") +
          (isMobileMenuOpen && "!translate-x-0 ")
        }
      >
        <div className="antd-stop-propagation space-y-1 px-6 pt-2 pb-3">
          {(props.web2 ? navigationElementsWeb2 : navigationElementsWeb3).map(
            (element) => (
              <MobileSubmenu
                element={element}
                key={element.name}
                web2={props.web2}
              />
            )
          )}
        </div>
        <div className="flex flex-col items-center pt-4 pb-3">
          <div className="my-10 flex gap-7">
            <Image src={discourse} alt="VDAO" width={50} height={50} />
            <Image src={discordCircle} alt="VDAO" width={50} height={50} />
          </div>
          <div className="flex items-center px-5">
            <VDAOConnectButton
              className="border-vdao-dark text-vdao-dark"
              web2={props.web2}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileSubmenu = (props: {
  element: NavigationElement;
  web2?: boolean;
}) => {
  const { element, web2 } = props;

  const [isChildOpen, setIsChildOpen] = useState(false);
  const router = useRouter();

  const hasChildren = element.children && element.children.length > 0;
  const toggleChild = () => hasChildren && setIsChildOpen(!isChildOpen);

  return (
    <>
      <button
        onClick={hasChildren ? toggleChild : () => router.push(element.link)}
        className={
          "h3 flex w-full items-center justify-between py-2 text-left text-base font-medium hover:bg-opacity-75 focus:outline-none " +
          (isChildOpen
            ? "text-vdao-light"
            : web2
            ? "text-vdao-dark "
            : "text-white ")
        }
      >
        {element.name}
        {hasChildren && (
          <svg
            className={`h-10 w-10 transform text-vdao-light transition duration-300 ${
              isChildOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>
      <div
        style={{
          maxHeight: isChildOpen
            ? `${(element?.children?.length || 0) * 3}rem`
            : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        {hasChildren &&
          element?.children?.map((child) => (
            <Link
              href={child.link}
              key={child.name}
              className={
                "big-text-mobile block py-1 pl-4 text-sm font-medium last:mb-4 hover:bg-opacity-75 " +
                (web2 ? "text-vdao-dark " : "text-white ")
              }
            >
              {child.name}
            </Link>
          ))}
      </div>
    </>
  );
};

const HeaderManifesto = (props: Props) => {
  return (
    <div className="mx-auto flex max-w-[1280px] justify-between bg-vdao-deep py-11 ">
      <Image
        src={logo}
        alt="VDAO"
        className="mx-auto my-auto h-[30px] w-[130px] md:mx-0"
      />
      <div className="flex flex-row justify-center gap-7">
        <Image
          src={twitter}
          alt="VDAO"
          width={30}
          height={30}
          className="hidden md:block"
        />
        <Image
          src={discord}
          alt="VDAO"
          width={30}
          height={30}
          className="hidden md:block"
        />
        <Divider
          type="vertical"
          className="hidden !h-full bg-[#848484] md:block"
        />
        <div className="flex flex-col-reverse gap-4 px-4 text-center md:flex-row md:gap-8">
          <span className="my-auto text-lg font-medium text-white">
            {props.signatures || 0} Signatures
          </span>

          <VDAOConnectButton className="border-vdao-light text-vdao-light" />
        </div>
      </div>
    </div>
  );
};

export { HeaderManifesto, Header };

export default Header;
