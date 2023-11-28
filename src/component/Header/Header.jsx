import Bitcoin from "../../assets/images/World.png";
import Buttons from "../Button/Button";
import * as H from "./Headerstyled";

export const Header = () => {
  return (
    <H.Headers>
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <H.Singdiv>SIGN UP TODAY</H.Singdiv>
            <H.Text className="display-3">
              The World’s <H.Colors> Fastest Growing </H.Colors> Crypto Web App
            </H.Text>
            <H.Information className="text-black-50">
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
              bank transfers or your credit/debit card.
            </H.Information>
            <H.Buttons className="d-md-flex align-items-center ">
              <Buttons text="Get Started" color="color" />
              <div className="btn-group">
                <H.Download
                  type="button"
                  className="dropdown-btn btn btn-outline-primary  justify-content-between rounded-pill dropdown-toggle "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Download App
                </H.Download>
              </div>
            </H.Buttons>
          </div>

          <H.WorldImage className="col-6">
            <img src={Bitcoin} className="img-fluid" alt="Bitcoin" />
          </H.WorldImage>
        </div>
      </div>
    </H.Headers>
  );
};
