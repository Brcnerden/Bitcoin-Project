import NavScroll from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import * as L from "./LayoutStyled";

import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <L.Hearder>
        <NavScroll />
        <Header />
      </L.Hearder>
      {children}
      <Footer />
    </div>
  );
};
