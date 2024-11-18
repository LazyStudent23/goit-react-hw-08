import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";
import css from './UserMenu.module.css'

const UserMenu = () => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css.user_menu_box}>
      <p className={css.greeting_text}>Hello, {user.name}</p>
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
