import React from "react";

const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-violet-500 text-violet-50 hover:bg-violet-600 duration-300 mt-5 rounded-md py-2"
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
