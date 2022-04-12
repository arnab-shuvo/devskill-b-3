import { Outlet } from "react-router-dom";
import SignIn from "./pages/Signin";
import { useUserDispatch } from "./store/action-dispatchs";

const PrivateOutlate = () => {
  const { user } = useUserDispatch();
  return user.authorized && user.user?.role === "admin" ? (
    <Outlet />
  ) : (
    <SignIn />
  );
};

export default PrivateOutlate;
