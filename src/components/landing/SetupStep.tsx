import Image from "next/image";

function SetupStep({ setup }: { setup: SetupStep }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center z-10 ml-3">
        <div className="text-6xl  font-bold">{setup.number}</div>
        <div className="text-xl/tight max-w-36 font-semibold ml-6">{setup.title}</div>
        
      </div><div className="relative -top-6"><Image alt={setup.title} src={setup.image} sizes="512px" className="w-full" /></div>
    </div>
  );
}

export default SetupStep;
