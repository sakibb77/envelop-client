import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [fromFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(fromFields);

    //clear fields
    setFromFields({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-14">
      <form onSubmit={handleRegister} className="flex flex-col gap-5" action="">
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
      </form>
    </div>
  );
};

export default Register;
