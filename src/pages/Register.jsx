import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [fromFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();

    await signup(fromFields.name, fromFields.email, fromFields.password);

    // clear fields
    setFromFields({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-14 ">
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-5 max-w-[20rem]"
        action=""
      >
        <SectionTitle title={"Register"} />

        {/* name input */}
        <FormControl
          label="name"
          labelInner="Name"
          inputType="text"
          placeholder="write your name"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />

        {/* email input */}
        <FormControl
          label="email"
          labelInner="Email"
          inputType="email"
          placeholder="write your email"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />

        {/* password input */}
        <FormControl
          label="password"
          labelInner="Password"
          inputType="password"
          placeholder="write your password"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />

        <Button text={"register"} submit />

        {error && (
          <p className="p-4 rounded bg-rose-100 text-rose-500 border border-rose-400">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
