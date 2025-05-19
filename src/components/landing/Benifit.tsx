import Image from "next/image";  
  
function Benifit({ benifit }: { benifit: Benifit }) {
  return  <div
  className="flex flex-col text-center items-center max-md:mb-8 md:my-8 p-3"
>
  <Image alt={benifit.title} src={benifit.icon} className="w-20" />
  <h3 className="text-md sm:text-lg text-gray font-bold mt-6">
    {benifit.title}
  </h3>
  <p className="mt-3 text-center text-sm  text-gray ">
    {benifit.desc}
  </p>
</div>;
}

export default Benifit;
