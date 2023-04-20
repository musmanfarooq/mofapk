import LoginCard from "@/components/LoginCard";
import { selectUser } from "@/store/storeSlice/userSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const user = useSelector(selectUser);
  const { push } = useRouter();

  useEffect(() => {
    if (user != null) {
      push("/upload");
    }
  }, [push, user]);

  return (
    <div>
      <LoginCard />
    </div>
  );
};

export default Index;
