import Logo from "@/components/ui/Logo";
import benifits from "@/store/benifits";
import checkBlue from "@/assets/check-blue.svg";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

function Register() {
  return (
    <section className="flex flex-row w-full ">
      <div className="flex-col w-1/2 bg-theme4 p-16 pt-[20vh] hidden md:flex">
        <div className="flex flex-col flex-grow-1">
          <Logo size="large" />
          <div className="flex flex-col max-w-[550px] mt-8">
            <p>{"Australia's trusted warranty and maintenance platform."}</p>
            <p className="mt-4">
              {
                "Save time and money with effortless tracking of warranties and maintenance for equipment, appliances, fittings, or virtually anything."
              }
            </p>
          </div>
          <div className="flex flex-col gap-8 mt-14">
            {benifits.map((benifit, index) => (
              <div
                key={`benifit-${index}`}
                className="flex flex-row items-center"
              >
                <div className="flex items-center justify-center w-8 h-8 border rounded-lg border-gray-300 bg-white">
                  <img src={checkBlue.src} alt="Blue Check" />
                </div>
                <h2 className="text-lg font-bold text-center ml-4">
                  {benifit.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-12 pt-12">
          <Link href="/">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex flex-col items-center w-full md:w-1/2 min-h-dvh p-6 md:p-12 pt-12 md:pt-[20vh]">
        <div className="flex flex-col w-full max-w-[450px] max-md:my-auto">
          <div className="flex md:hidden flex-col mb-8">
            <Logo size="large" />
          </div>
          <h2 className="font-bold text-lg md:text-xl mb-6">Create an account</h2>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

export default Register;
