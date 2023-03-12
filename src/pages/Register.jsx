import React, { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
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

        <Button text={isLoading ? "Registering... " : "Register"} submit />

        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Register);
