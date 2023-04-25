import { removeuser, selectUser } from "@/store/storeSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { useRouter } from "next/router";

const Header = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const user = useSelector(selectUser);
  return (
    <div className="flex gap-2 justify-between p-4 shadow-sm items-center">
      <h5 className="text-2xl cursor-pointer" onClick={() => push("/")}>
        Mofapk
      </h5>
      {user && (
        <div className="flex gap-3 justify-between items-center">
          <Button
            content="Log Out"
            className="bg-red-500 hover:bg-red-600"
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
