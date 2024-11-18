import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <nav className={css.navWrapper}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </nav>
    // на реєстр і на логін
  );
};

export default AuthNav;
