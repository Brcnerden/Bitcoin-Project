import SingUp from "../../assets/images/SingUp.png";
import Arrow from "../../assets/images/Arrow.png";
import Fund from "../../assets/images/Fund.png";
import BuyCrypto from "../../assets/images/BuyCrypto.png";

import * as G from "./GetStartStyled";

export const GetStart = () => {
  return (
    <G.Banner className="container">
      <G.Title>
        <div>Get started in just a few minutes</div>
      </G.Title>
      <G.Text className="d-md-flex">
        <div>
          <img src={SingUp} alt="SingUp" />
          <div>Sign Up</div>
          <p>
            Buy Bitcoin or Ethereum, then securely store it in your Wallet or
            send it on easily to friends
          </p>
        </div>
        <G.Arrow>
          <img src={Arrow} alt="Arrow" />
        </G.Arrow>
        <div>
          <img src={Fund} alt="Fund" />
          <div>Fund</div>
          <p>
            Choose your preferred payment method such as bank transfer or credit
            card to top up your NEFA Wallet
          </p>
        </div>

        <G.Arrow>
          <img src={Arrow} alt="Arrow" />
        </G.Arrow>
        <div>
          <img src={BuyCrypto} alt="BuyCrypto" />
          <div>Buy Crypto</div>
          <p>
            Sign up for your free NEFA Wallet on web, iOS or Android and follow
            our easy process to set up your profile
          </p>
        </div>
      </G.Text>
    </G.Banner>
  );
};
