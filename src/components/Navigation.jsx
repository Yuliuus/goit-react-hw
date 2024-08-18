import { NavLink } from "react-router-dom";

import css from "../components/css/Navigation.module.css";

const Navigation = ({ handleCloseMenu }) => {
  return (
    <nav  className={css.nav}>
      <ul className={css.wrap}>
        <li className={css.list}>
          <NavLink to="/" onClick={handleCloseMenu}>
            Home
          </NavLink>
        </li>
        <li className={css.list}>
          <NavLink to="/contacts" onClick={handleCloseMenu}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
