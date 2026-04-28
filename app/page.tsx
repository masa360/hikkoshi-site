import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NoSpamCall from "@/components/NoSpamCall";
import Campaign from "@/components/Campaign";
import Reasons from "@/components/Reasons";
import Steps from "@/components/Steps";
import PriceSecret from "@/components/PriceSecret";
import Achievement from "@/components/Achievement";
import Ranking from "@/components/Ranking";
import Voices from "@/components/Voices";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";
import LineFloatButton from "@/components/LineFloatButton";

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      <Header />
      <div id="quote-form">
        <Hero />
      </div>
      <NoSpamCall />
      <Reasons />
      <Campaign />
      <Steps />
      <PriceSecret />
      <Achievement />
      <Ranking />
      <Voices />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
      <LineFloatButton />
    </main>
  );
}
