import { useSelector } from "react-redux";
import AuthNav from "./AuthNav/AuthNav";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <nav>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};

export default AppBar;
