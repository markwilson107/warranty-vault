import message from "@/assets/message-outline.svg";
import phone from "@/assets/phone-outline.svg";
import booking from "@/assets/calendar-check.svg";
import location from "@/assets/map-marker-radius-outline.svg"

export default [
  {
    icon: message,
    title: "Talk to us",
    buttonText: "Message us",
    desc: "Our friendly team is here to help.",
    link: { name: "hello@warrantyvault.io", url: "mailto:hello@warrantyvault.io"},
    secondaryLink: "/contact",
    optional: false,
  },
  {
    icon: phone,
    title: "Call us",
    buttonText: "+61 408 123 456",
    desc: "Speak to one of our team members.",
    link: { name: "+61 408 123 456", url: "tel:+61408123456"},
    optional: false,
  },
  {
    icon: booking,
    title: "Book a meeting",
    buttonText: "Make a booking",
    desc: "Book a meeting and see a demo.",
    link: { name: "Make a booking", url: "/"},
    optional: false,
  },
  // {
  //   icon: location,
  //   title: "Visit us",
  //   buttonText: "Directions",
  //   desc: "Come say hello at our office in Perth.",
  //   link: { name: "Perth, WA 6000", url: "https://maps.app.goo.gl/HBfEi3DG7GcNMfnz6"},
  //   optional: true,
  // },
] as Contact[];