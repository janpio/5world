import Image from "next/image";
import groupImage from "public/illustrations/nftCollections/groupImage.svg";
import PurpleButton from "~/styles/shared/buttons/purpleButton";

const HowItWorks = () => {
  return (
    <div className="bg-vdao-deep px-10 py-20 text-white md:py-[140px] md:px-20">
      <div className="flex flex-col  gap-10 md:flex-row md:gap-[22px]">
        <div className="flex-1">
          <span className="mr-5 underline underline-offset-8 font-heading text-4xl font-medium md:float-right">
            How it works
          </span>
        </div>
        <div className="flex-1">
          <Image src={groupImage} alt="group-image" />
          <div className="pt-[30px] md:pr-28 font-body text-lg font-normal">
            Participating in a VDAO NFT auction is not only a chance to show
            your financial support for this mission, but also gives exclusive
            access to the wider VDAO ecosystem, including real-world learning
            opportunities and events.
          </div>

          <PurpleButton
            text="Comming Soon"
            className="mt-[38px] py-[5px] font-heading text-xl font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
