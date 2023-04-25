import React from "react";

import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import MailingListComponent from "~/components/misc/mailinglist";

import SectionOne from "~/components/pages/apply/sectionOne";
import SectionTwo from "~/components/pages/apply/sectionTwo";
import { FAQS } from "~/components/pages/apply/faqs";
import Description from "~/components/misc/description";
import FAQSection from "~/components/misc/FAQSection";
import ApplyDescription from "~/components/pages/apply/description";

type Props = {};

const apply = (props: Props) => {
  return (
    <>
      <Header web2 />

      <div className="w-screen bg-white text-vdao-dark">
        <ApplyDescription />

        <SectionOne />

        <SectionTwo />

        <FAQSection FAQS={FAQS} />

        <MailingListComponent />
      </div>

      <Footer />
    </>
  );
};

export default apply;
