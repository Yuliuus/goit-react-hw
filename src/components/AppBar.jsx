import { useSelector } from "react-redux";

import { selectLoggedIn } from "../redux/auth/selectors";

import { Link } from "react-router-dom";

import Container from "./Container";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";

import UserMenu from "./UserMenu";
import css from "./style.module.css";
const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      <header className={css.header}>
        <Container>
          <Link to="/">Home-page</Link>
          {isLoggedIn && (
            <div>
              <Navigation />
            </div>
          )}
          <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
        </Container>
      </header>
    </>
  );
};

export default AppBar;
