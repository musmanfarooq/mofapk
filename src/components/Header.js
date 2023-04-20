import { removeuser, selectUser } from "@/store/storeSlice/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  return (
    <div className="flex gap-2 justify-between p-4 shadow-sm items-center">
      <h5 className="text-2xl">Mofapk</h5>
      {user && (
        <div className="flex gap-3 justify-between items-center">
          <p>Welcome : Back</p>
          <Button
            content="Sign Out"
            onClick={() => {
              dispatch(removeuser());
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
