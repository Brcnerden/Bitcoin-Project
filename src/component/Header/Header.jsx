import Bitcoin from "../../assets/images/BitcoinImage.jpg";
import Buttons from "../Button/Button";
import * as H from "./Headerstyled";
import DropdownHeaders from "./DropdownHeader";

export const Header = () => {
  return (
    <H.Headers>
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <H.Singdiv>SIGN UP TODAY</H.Singdiv>
            <H.Text className="display-3">
              The World’s <H.Colors> Fastest Growing </H.Colors> Crypto Web App
            </H.Text>
            <p className="text-black-50">
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
              bank transfers or your credit/debit card.
            </p>
            <div className="d-flex">
              <Buttons text="Get Started" color="color" />
              <DropdownHeaders />
            </div>
          </div>

          <div className="col-6">
            <img src={Bitcoin} alt="Bitcoin" />
          </div>
        </div>
      </div>
    </H.Headers>
  );
};
