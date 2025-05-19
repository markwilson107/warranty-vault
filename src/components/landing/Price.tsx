import Button from "../ui/Button";
import Image from "next/image";
import checkmarkBlue from "@/assets/check-blue.svg";
import checkmarkYellow from "@/assets/check-yellow.svg";

function Price({ price, index }: { price: Price; index: number }) {
  return (
    <div
      className={`flex flex-col p-8 py-14 md:p-12 ${
        price.varient === "dark"
          ? "bg-theme3 text-white"
          : "bg-background-secondary"
      } rounded-3xl`}
    >
      <h3 className="text-xl font-bold">{price.title}</h3>
      <p className="mt-2 text-sm">{price.desc}</p>
      <p className="mt-5 text-4xl font-bold">
        {price.price}{" "}
        <span className="ml-2 text-base">{price.priceFrequency}</span>
      </p>
      <Button
        variant={price.varient === "light" ? "secondary" : "primary"}
        className="w-36 mt-5"
      >
        {"Get Started"}
      </Button>
      <ul className="text-sm/relaxed mt-6">
        {price.features.map((feature, index) => (
          <div
            key={`price-${price.title}-${index}`}
            className="flex items-center gap-3"
          >
            <Image
              src={price.varient === "light" ? checkmarkBlue : checkmarkYellow}
              alt="Checkmark"
            />
            {feature}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Price;
