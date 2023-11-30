import NavScroll from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import * as L from "./LayoutStyled";
import { MoneyBoard } from "../Board/MoneyBoard";
import { Footer } from "../Footer/Footer";
import { Shopping } from "../Shopping/Shopping";
import { Banner } from "../Banner/Banner";
import { CreditCard } from "../CreditCard/CreditCard";
import { GetStart } from "../GetStart/GetStart";

export const Layout = () => {
  return (
    <div>
      <L.Hearder>
        <NavScroll />
        <Header />
      </L.Hearder>
      <MoneyBoard />
      <Shopping />
      <Banner />
      <CreditCard />
      <GetStart />
      <Footer />
    </div>
  );
};
