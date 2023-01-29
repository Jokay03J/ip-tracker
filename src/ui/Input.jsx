import React from "react";

export default function Input({
  onChange,
  placeholder = "entrer un text",
  type = "text",
  ...props
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className="border--1 border--orange border--solid rounded--xs"
      {...props}
    />
  );
}
