// import Button from "@/components/button";
import React from "react";
import { useState } from "react";
import { db, storage } from "../../../firebase";
import firebase from "firebase/compat/app";

const index = () => {
  const [image, setImage] = useState();

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

  return (
    <div className="pt-4">
      <form className="max-w-[50vw] mr-auto ml-auto" id="form-file-upload">
        <label id="label-file-upload" htmlFor="input-file-upload">
          <div>
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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
          onClick={uploadPic}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default index;
