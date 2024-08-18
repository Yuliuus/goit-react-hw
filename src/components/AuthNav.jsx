import { Link } from "react-router-dom";

const AuthNav = ({ handleCloseMenu }) => {
  return (
    <ul>
      <li>
        <Link to="/login" onClick={handleCloseMenu}>
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" onClick={handleCloseMenu}>
          Sign Up
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
