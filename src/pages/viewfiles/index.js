"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { storage } from "../../../firebase";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const Index = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    let isMounted = true;
    storage
      .ref("images")
      .listAll()
      .then(function (result) {
        result.items.forEach(function (imageRef) {
          imageRef.getDownloadURL().then(function (url) {
            if (isMounted) {
              setImageUrls((imageUrls) => [...imageUrls, url]);
              setIsLoading(false);
            }
          });
        });
      })
      .catch(function (error) {
        console.log("Error:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-wrap gap-4 p-4">
          {imageUrls.map((url) => (
            <div key={url}>
              <img
                className="w-[350px] cursor-pointer transition-all hover:scale-105"
                key={url}
                src={url}
                alt="firebase-img"
              />
            </div>
          ))}
        </div>
      )}
      <Button
        className="block ml-auto mr-auto mt-5"
        content="Back to Home"
        onClick={() => push("/")}
      />
    </>
  );
};

export default Index;
