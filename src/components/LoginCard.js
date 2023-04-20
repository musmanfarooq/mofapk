"use client";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
    if (password === "usman@123") {
      push("/upload");
      dispatch(
        adduser({
          user: "mofapk"
        })
      );
    } else {
      setWrongPass(true);
      setTimeout(() => {
        setWrongPass(false);
      }, 3000);
    }
  }

  return (
    <div className="mr-auto ml-auto">
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
        </form>
      </div>
      {wrongPass && <h3>Password is incorrect</h3>}
    </div>
  );
};

export default LoginCard;
