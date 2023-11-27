import NavScroll from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import * as L from "./LayoutSteyled";
import { MoneyBoard } from "../Board/MoneyBoard";

export const Layout = () => {
  return (
    <div>
      <L.Hearder>
        <NavScroll />
        <Header />
      </L.Hearder>

      <MoneyBoard />
    </div>
  );
};
