"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = userInfo;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/users", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());

    console.log(res);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-1/3 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
