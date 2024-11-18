import { NavLink } from "react-router-dom"
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from './Navigation.module.css'
import { useSelector } from "react-redux";


const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home page
      </NavLink>
      {isLoggedIn ? <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/contacts"
      >
        Contacts
      </NavLink> : null}
      {/* <AuthNav/> */}
    </nav>
    // дом сторінка і контакти якщо авторизов
  );
}

export default Navigation