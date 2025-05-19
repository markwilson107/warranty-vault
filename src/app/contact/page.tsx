import ContactForm from "@/components/landing/ContactForm";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import Section from "@/components/ui/Section";
import contacts from "@/store/contacts";
import Image from "next/image";
import locationPin from "@/assets/map-marker-radius-outline.svg";
import Footer from "@/components/ui/Footer";
import Card from "@/components/ui/Card";

export default function Contact() {
  return (
    <div>
      <main>
        <Header />
        <Section type="tight" className="flex flex-col md:mt-4 md:px-4">
         
            <div className="flex max-md:flex-col-reverse w-full items-start gap-4 md:gap-6 rounded-3xl">
              <div className="flex-3">
                <h1 className="py-6 text-2xl md:text-3xl font-bold max-md:hidden">
                  Contact us
                </h1>
                <p className="md:max-w-[450px] max-md:hidden">
                  {
                    "We're here to help! Fill out the form, shoot us an email, or give us a ring  during business hours. We'll get back to you as fast as possible."
                  }
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-1 flex-3 gap-4 my-6 md:mt-12 max-md:px-2">
                  {contacts.map((contact, index) => (
                    <div
                      key={`contact-page-contact-${index}`}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex py-2 pr-6 items-start gap-3">
                        <div className="p-2 bg-white rounded-lg border border-gray-200 flex-shrink-0">
                          <Image
                            src={contact.icon}
                            alt={contact.title}
                            width={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-1">
                          <h2 className="text-lg font-bold">{contact.title}</h2>
                          <p className="font-normal">{contact.desc}</p>
                          <a
                            className="font-semibold text-theme2"
                            href={contact.link.url}
                          >
                            {contact.link.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col flex-2 h-full l px-6 md:px-10 lg:px-14 py-10 md:py-12 bg-theme4 rounded-3xl w-full">
                <h1 className="font-bold text-2xl md:text-2xl mb-10 max-md:hidden">
                  {
                    "Get in touch with us now and find out how we can help your business."
                  }
                </h1>
                <div className="mb-10 md:hidden">
                  <h1 className="text-3xl font-bold ">Contact us</h1>
                  <p className="mt-3">
                    {
                      "Get in touch with us now and find out how we can help your business."
                    }
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
       
        </Section>
        <Section type="tight" className="flex flex-col mb-18 md:px-4">
          <div className="flex w-full mt-4 md:mt-10 gap-4">
            <div className="flex-3 min-h-[350px] bg-[#E5E3DF] rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12749.389284134717!2d115.85450508186963!3d-31.948865210843767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA!5e1!3m2!1sen!2sau!4v1742806296583!5m2!1sen!2sau"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-3xl"
              ></iframe>
            </div>
          </div>
        </Section>
        <Footer />
      </main>
    </div>
  );
}
