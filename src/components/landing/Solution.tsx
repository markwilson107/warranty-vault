import Button from "../ui/Button";
import Image from "next/image";

function Solution({
  solution,
  flipDirection,
}: {
  solution: Solution;
  flipDirection: boolean;
}) {
  return (
    <div className="relative w-full my-4 md:my-8">
      <div
        className={`relative md:absolute flex -z-10 right-0 left-0 top-0 bottom-0 ${
          flipDirection ? "md:right-1/3" : "md:left-1/3"
        }  bg-background-secondary rounded-3xl overflow-hidden pt-10 px-10 ${
          flipDirection ? "justify-start" : "justify-end"
        }`}
      >
        <Image
          sizes="512px"
          className="object-contain object-bottom"
          alt={solution.title}
          src={solution.image}
        />
      </div>
      <div
        className={`flex flex-row items-center justify-start w-full ${
          flipDirection ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col py-8 md:py-20 w-full md:w-4/9 max-w-[500px] md:max-w-full ">
          <h2 className="font-bold text-2xl sm:text-3xl">{solution.title}</h2>
          <div>
            <Button className="mt-6">{solution.buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
