"use client";

import { useState } from "react";
import InputField from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  return (
    <form className="flex flex-col gap-4 w-full">
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
      <Button className="mt-4">Login</Button>
    </form>
  );
}

export default LoginForm;
