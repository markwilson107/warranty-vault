import Button from "../ui/Button";
import Card from "../ui/Card";
import Section from "../ui/Section";
import peopleBanner from "../../assets/people-banner.png";
import Image from "next/image";
import benifits from "@/store/benifits";
import Link from "next/link";

function Banner() {
  return (
    <Section type="wide">
      <Card className="relative flex-col overflow-hidden items-center md:items-start max-sm:h-[74dvh] max-sm:max-h-[740px] max-sm:min-h-[650px]">
        <div className="z-10 px-5 sm:px-8 md:px-12 lg:px-20 pt-12 md:py-20 lg:py-28 max-w-full md:max-w-[500px] lg:max-w-[710px]">
          <h1 className="text-4xl/snug lg:text-5xl/tight font-bold">
            {"Simplified warranty and maintenance"}
          </h1>
          <p className="text-sm md:text-base mt-4 hidden sm:flex">
            {
              "Save time and money with effortless tracking of warranties and maintenance for equipment, appliances, fittings, or virtually anything."
            }
          </p>
          <p className="text-sm md:text-base mt-4 flex sm:hidden">
            {
              "Save time and money with effortless tracking of warranties and maintenance for virtually anything."
            }
          </p>
          <div className="flex gap-2 sm:gap-5 mt-6 w-full">
            <Button
              size={{ md: "sm", lg: "md" }}
              className="flex-1 max-w-full sm:max-w-42"
              href="/register"
            >
              Get Started
            </Button>

            <Button
              size={{ md: "sm", lg: "md" }}
              variant="outline"
              className="flex-1 max-w-full sm:max-w-42"
              href="/contact"
            >
              Talk to our team
            </Button>
          </div>
          <ul className="mt-12 mx-2 mb-30 md:mb-30 md:hidden w-2/3">
            {benifits.map((benifit, index) => (
              <li key={`banner-benifit-${index}`} className="flex gap-2 my-4 sm:my-6 sm:text-lg font-semibold">
                <svg
                  className="text-theme2"
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                </svg>
                {benifit.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4 sm:max-w-[400px] lg:max-w-[500px] translate-x-1/6 sm:translate-x-1/5 md:translate-x-1/4 lg:translate-x-4/9 absolute sm:w-full bottom-0 left-1/3 -md:right-25 md:right-1/13">
          <Image
            alt="Maintenance Workers"
            sizes="500px"
            src={peopleBanner}
            className="object-contain"
          />
        </div>
      </Card>
    </Section>
  );
}

export default Banner;
