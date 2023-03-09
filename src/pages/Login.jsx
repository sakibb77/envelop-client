import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Login = () => {
  const [fromFields, setFromFields] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(fromFields);

    //clear fields
    setFromFields({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login flex flex-col justify-center items-center mt-14">
      <form onSubmit={handleLogin} className="flex flex-col gap-5" action="">
        <SectionTitle title={"Login"} />

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

export default Login;
