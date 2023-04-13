import { type NextPage } from "next";

import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";

import {
  AboutUsComponent,
  AboutUsCoreTeamComponent,
  AboutUsCoreValueComponent,
  AboutUsVisionMissionComponent,
} from "~/components/pages/about";

import { MailingListComponent } from "~/components/misc/mailinglist";

const AboutUs: NextPage = () => {
  return (
    <>
      <Header />
      <div className="w-full text-vdao-dark">
        <AboutUsComponent />

        <AboutUsCoreValueComponent />

        <AboutUsVisionMissionComponent />

        <AboutUsCoreTeamComponent />

        <MailingListComponent />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;