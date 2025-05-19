import socials from "@/store/socials";
import Image from "next/image";
import Link from "next/link";

function Socials() {
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => (
        <Link key={`social-${index}`} href={social.url}>
          <Image alt={social.title} src={social.icon} width={23} />
        </Link>
      ))}
    </div>
  );
}

export default Socials;
