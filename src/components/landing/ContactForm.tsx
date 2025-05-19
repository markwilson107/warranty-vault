"use client";

import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="flex flex-col w-full gap-5">
      <Input
        id="contact-form-name"
        variant="underline"
        placeholder="Name"
        value={name}
        className="sm:text-lg"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        id="contact-form-email"
        variant="underline"
        placeholder="Email"
        className="sm:text-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        id="contact-form-phone"
        variant="underline"
        placeholder="Phone"
        className="sm:text-lg"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        placeholder="Message"
        className="border-b border-gray-400 sm:text-lg outline-none resize-none"
      ></textarea>
      <Button className="mt-6">Submit</Button>
    </form>
  );
}

export default ContactForm;
