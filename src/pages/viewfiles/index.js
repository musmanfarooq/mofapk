'use client';

import LoadingSpinner from "@/components/LoadingSpinner";
import { storage } from "../../../firebase";
import React, { useState, useEffect } from "react";

const Index = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // add a boolean variable to track whether the component is mounted
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
      ) 
      : (
        <div className="flex flex-wrap gap-4 p-4">
          {imageUrls.map((url) => (
            <div>
              <img
                className="w-[350px] cursor-pointer transition-all hover:scale-105"
                key={url}
                src={url}
                alt="firebase-img"
              />
            </div>
          ))}
        </div>
      )
      }
    </>
  );
};

export default Index;
