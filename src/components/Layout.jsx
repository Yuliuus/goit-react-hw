import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import Container from "./Container";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};

export default Layout;
