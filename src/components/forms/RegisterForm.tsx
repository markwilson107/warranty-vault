"use client";

import { useState } from "react";
import InputField from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});

  return (
    <form className="flex flex-col gap-4 w-full">
      <InputField
        id="name"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <InputField
        id="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <InputField
        id="password"
        label="Password"
        placeholder="Enter a password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <InputField
        id="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <Checkbox
        label={"I accept the terms & conditions"}
        checked={acceptedTerms}
        onChange={(checked) => setAcceptedTerms(checked)}
      ></Checkbox>
      <Button className="mt-4">Submit</Button>
    </form>
  );
}

export default RegisterForm;
