import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [fromFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register flex flex-col justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-5" action="">
        <SectionTitle title={"Register"} />
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            value={fromFields.name}
            onChange={(e) =>
              setFromFields({ ...fromFields, name: e.target.value })
            }
            type="text"
            name=""
            id="name"
            placeholder="write your name"
            className="border rounded cursor-pointer focus:border-violet-500 outline-none py-3 px-5 max-w-[25rem]"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
