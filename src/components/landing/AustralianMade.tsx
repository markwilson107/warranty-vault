import Button from "../ui/Button";
import Image from "next/image";
import australia from "@/assets/australia.png";

type Props = {
  className?: string;
};

function AustralianMade(props: Props) {
  return (
    <div
      className={`relative w-full max-w-2xl bg-theme3 p-6 py-12 sm:p-14 rounded-3xl overflow-hidden ${props.className}`}
    >
      <div className="relative z-10">
        <h3 className="flex flex-col text-white text-2xl sm:text-3xl font-semibold max-w-[250px] sm:max-w-[300px] ">
          {"Australian owned and operated"}
        </h3>
        <Button className="mt-5 w-42" href="/contact">{"Talk to us now"}</Button>
      </div>
        <Image
          alt="Australia Country"
          src={australia}
          sizes="512px"
          width={300}
          className="absolute object-contain top-0 sm:-top-2 left-2/5 sm:left-1/2 sm:right-8 max-h-[300px] sm:max-h-full"
        />
    </div>
  );
}

export default AustralianMade;
