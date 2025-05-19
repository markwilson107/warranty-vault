import Header from "@/components/ui/Header";
import Banner from "@/components/landing/Banner";
import Benifit from "@/components/landing/Benifit";
import Solution from "@/components/landing/Solution";
import Section from "@/components/ui/Section";
import benifits from "@/store/benifits";
import solutions from "@/store/solutions";
import Image from "next/image";
import arrowDrawnRight from "@/assets/arrow-drawn-right.svg";
import arrowDrawnLeft from "@/assets/arrow-drawn-left.svg";
import AustralianMade from "@/components/landing/AustralianMade";
import setupSteps from "@/store/setupSteps";
import SetupStep from "@/components/landing/SetupStep";
import pricing from "@/store/pricing";
import Price from "@/components/landing/Price";
import Contact from "@/components/landing/Contact";
import arrowDrawnDown from "@/assets/arrow-drawn-down.svg";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Banner />
        <Section type="tight" className="flex flex-col items-center py-10 z-10">
          {/* Stop missing unclaimed warranties */}
          <h2 className="relative text-center text-gray text-2xl md:text-3xl font-bold my-2">
            <Image
              className="absolute right-[105%] -top-[65%] max-lg:hidden"
              alt="Arrow Right"
              width={180}
              src={arrowDrawnRight}
            />
            <Image
              className="absolute z-20 top-[-90px] -left-0 sm:-left-5 min-lg:hidden -rotate-90 scale-y-[-1]"
              alt="Arrow Down"
              width={110}
              src={arrowDrawnLeft}
            />
            {"Stop missing unclaimed warranties"}
          </h2>

          {/* Benifits */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-2">
            {benifits.map((benifit, index) => (
              <Benifit key={`benifit-${index}`} benifit={benifit} />
            ))}
          </div>

          {/* Solution */}
          <div  id="solution" className="flex flex-col w-full">
            {solutions.map((solution, index) => (
              <Solution
                key={`solution-${index}`}
                flipDirection={index % 2 !== 0}
                solution={solution}
              />
            ))}
          </div>

          {/* Australian Owned */}
          <AustralianMade className="my-16" />

          {/* Setup is super easy */}
          <h2 className="relative text-center text-gray text-2xl md:text-3xl font-bold my-8">
            <Image
              className="absolute left-[115%] -top-[50%] max-lg:hidden"
              alt="Arrow Left"
              width={150}
              src={arrowDrawnLeft}
            />
            {"Setup is super easy"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 w-full my-10">
            {setupSteps.map((setup, index) => (
              <SetupStep key={`setup-${index}`} setup={setup} />
            ))}
          </div>
        </Section>

        {/* Pricing & Plans */}
        <Section id="pricing" type="wide" className="flex-col">
          <h2 className="relative text-center text-gray text-2xl md:text-3xl font-bold mb-8">
            {"Pricing & Plans"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full mt-10">
            {pricing.map((price, index) => (
              <Price key={`setup-${index}`} price={price} index={index} />
            ))}
          </div>
        </Section>

        <div className="flex justify-center my-15 md:my-20">
          <Image
            src={arrowDrawnDown}
            alt="Arrow down"
            className="w-[60px] md:w-[80px]"
          />
        </div>

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
