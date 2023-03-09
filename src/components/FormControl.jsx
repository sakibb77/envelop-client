import React from "react";

const FormControl = ({
  label,
  labelInner,
  inputType,
  placeholder,
  fromFields,
  setFromFields,
}) => {
  return (
    <div className="form-control flex flex-col gap-2">
      <label htmlFor="name" className="text-gray-500 font-semibold">
        {labelInner}
      </label>
      <input
        value={fromFields[label]}
        onChange={(e) =>
          setFromFields({ ...fromFields, [label]: e.target.value })
        }
        type={inputType}
        name=""
        id={label}
        placeholder={placeholder}
        className="border rounded-md cursor-pointer focus:border-violet-500 outline-none py-2 px-5 max-w-[25rem]"
      />
    </div>
  );
};

export default FormControl;
