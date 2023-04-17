import React from "react";

const Button = ({ content, clickfunction }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={clickfunction}
    >
      {content}
    </button>
  );
};

export default Button;
