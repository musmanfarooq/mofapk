"use client";

import React from "react";
import { useState, useEffect } from "react";
import { db, storage } from "../../../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/storeSlice/userSlice";
import { useRouter } from "next/router";
import Button from "@/components/Button";

const Index = () => {
  const [image, setImage] = useState();
  const user = useSelector(selectUser);
  const { push } = useRouter();

  const uploadPic = (e) => {
    e.preventDefault();
    if (image == null) {
      return;
    } else {
      const imageref = storage
        .ref(`images/${image.name}`)
        .put(image)
        .on("status Changes", alert("success"), alert);
      imageref();
      setImage("");
    }
  };

  useEffect(() => {
    if (user == null) {
      push("/");
    }
  }, [user, push]);

  return (
    <div className="pt-4 text-center">
      <form className="max-w-[50vw] mr-auto ml-auto" id="form-file-upload">
        <label id="label-file-upload" htmlFor="input-file-upload">
          <div className="mb-3 md:mb-0">
            <p>Upload your File Here</p>
          </div>
        </label>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button className="mt-[50px] md:mt-[20px]" content="Submit" type="submit" onClick={uploadPic} />
      </form>
      <br />
      <Button className="block ml-auto mr-auto mt-3" content="Back to Home" onClick={() => push("/")} />
    </div>
  );
};

export default Index;
