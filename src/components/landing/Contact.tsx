import contacts from "@/store/contacts";
import Card from "../ui/Card";
import Section from "../ui/Section";
import Image from "next/image";
import Button from "../ui/Button";
import personContact from "@/assets/person-contact.png";

function Contact() {
  return (
    <Section type="wide" className="mb-32">
      <Card className="relative flex-col justify-center overflow-hidden items-center p-6 py-16 sm:p-12">
        <div className="flex justify-end w-full pb-[250px] sm:pb-[230px] md:p-0">
          <div className="flex flex-col w-full md:w-4/5 justify-self-end items-center">
            <h2 className="text-3xl font-bold">{"Contact Us"}</h2>
            <p className="w-full max-w-72 text-center mt-3 text-base/snug">
              {
                "Get in touch with us now and find out how we can help your business."
              }
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 w-full max-w-[700px]">
              {contacts.filter(c => !c.optional).map((contact, index) => (
                <div key={`contact-landing-${index}`} className={`w-full ${index === 2 ? "col-span-1 sm:col-span-2 lg:col-span-1 flex justify-center" : ""}`} >
                    <div className={`flex flex-col items-center bg-background-secondary/90 rounded-xl p-6 w-full ${index === 2 ? "max-w-full sm:max-w-[calc(50%-0.5rem)] lg:max-w-full" : "w-full"}`}>
                  <Image src={contact.icon} alt={contact.title} width={30} />
                  <div className="mt-2 font-semibold">{contact.title}</div>
                  <Button className="text-sm w-full font-semibold mt-4" href={contact.secondaryLink || contact.link.url}>
                    {contact.buttonText}
                  </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-full aspect-square -left-1/5 sm:left-auto sm:right-3/7 md:right-5/8 max-h-[350px] sm:max-h-[450px] md:max-h-[500px] ">
          <Image
            src={personContact}
            alt="Person Contact"
            className="object-contain object-bottom h-full"
          />
        </div>
      </Card>
    </Section>
  );
}

export default Contact;
