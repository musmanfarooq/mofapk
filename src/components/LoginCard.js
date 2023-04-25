"use client";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { adduser } from "@/store/storeSlice/userSlice";
const LoginCard = () => {
  const [password, setPassword] = useState("");
  const [wrongPass, setWrongPass] = useState(false);
  const { push } = useRouter();
  const dispatch = useDispatch();

  function passwordhandle(e) {
    e.preventDefault();
    if (password === process.env.Password_Key) {
      push("/upload");
      dispatch(
        adduser({
          user: "mofapk",
        })
      );
    } else {
      setPassword("");
      setWrongPass(true);
      setTimeout(() => {
        setWrongPass(false);
      }, 3000);
    }
  }

  return (
    <div className="mr-auto ml-auto pt-4">
      <div className="max-w-[350px] mr-auto ml-auto">
        <form onSubmit={passwordhandle}>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Password
          </label>
          <input
            type="password"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            className="mt-5 md:mt-2"
            content="Login"
            onClick={passwordhandle}
          />
        </form>
      </div>
      {wrongPass && <h3 className="text-center">Password is incorrect</h3>}
    </div>
  );
};

export default LoginCard;
