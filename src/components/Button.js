import React from "react";

const Button = ({ content, onClick, type, className }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${className}`}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
