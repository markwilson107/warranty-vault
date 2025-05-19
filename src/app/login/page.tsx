import LoginForm from "@/components/forms/LoginForm";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

function Login() {
  return (
    <section className="flex h-dvh w-full flex-col items-center p-6 md:p-12">
      <div className="flex flex-col items-center gap-8 w-full max-w-[400px] my-auto">
        <Logo size="large" />
        <h2 className="font-bold text-lg md:text-xl">Login</h2>
        <LoginForm />
      </div>
      <div className="flex gap-4 mt-12 pt-12 mr-auto">
        <Link href="/">Terms</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </section>
  );
}

export default Login;
