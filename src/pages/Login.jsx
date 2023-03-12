import React, { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [fromFields, setFromFields] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(fromFields.email, fromFields.password);

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

        <Button text={isLoading ? "Loggin..." : "login"} submit />
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Login);
