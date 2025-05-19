import Socials from "./Socials";
import Logo from "./Logo";
import Section from "./Section";
import navLinks from "@/store/navLinks";
import Image from "next/image";
import arrow from "@/assets/arrow-bottom-right.svg";
import contacts from "@/store/contacts";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-theme3 text-white">
      <Section type="tight" className="grid grid-cols-1 md:grid-cols-3 py-16 sm:">
        <div className="flex flex-col gap-3 h-full my-6">
          <Logo white={true} />
          <p className="text-sm max-w-52">
            {"Australia's trusted warranty and maintenance platform."}
          </p>
          <Socials />
        </div>
        <div className="flex flex-col gap-1 h-full text-base font-light my-6">
          <h4 className="font-bold underline text-lg mb-2">{"Quick Links"}</h4>
          {navLinks.map((link, index) => (
            <div key={`footer-nav-link-${index}`} className="flex">
              <Link className="flex gap-2" href={link.searchParam || link.url}  scroll={false}>
                <Image alt={link.title} src={arrow} />
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 h-full text-base font-light my-6">
          <h4 className="font-bold underline text-lg mb-2">{"Contact Info"}</h4>
          {contacts.map((contact, index) => (
            <Link href={contact.secondaryLink || contact.link.url} key={`footer-contact-link-${index}`} className="flex gap-2">
              <Image
                src={contact.icon}
                alt={contact.title}
                width={16}
                className="invert"
              />
              {contact.title}
            </Link>
          ))}
        </div>
        <div className="">
          
        </div>
      </Section>
    </footer>
  );
}

export default Footer;
