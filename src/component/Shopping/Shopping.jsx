import BuyButton from "../../assets/images/BuyButton.png";
import * as S from "./ShoppingStyled";
import flag from "../../assets/images/flag.jpg";
import ArrowDown from "../../Icon/ArrowDown";
import Bitcoin from "../../Icon/Bitcoin";

export const Shopping = () => {
  return (
    <S.Card className="container d-md-flex mt-5">
      <div className="col-md-6 col-12">
        <S.Title>Buy & trade on the original crypto exchange.</S.Title>
        <S.Text>
          Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto
          Coin. We accept BTC crypto-currency
        </S.Text>
        <div className="d-flex">
          <S.PriceButton>
            <S.Line>Amount</S.Line>
            <S.Price>5,000</S.Price>
          </S.PriceButton>
          <S.Rate>
            <img className="img-fluid" src={flag} alt="flag" /> USD
            <span>
              <ArrowDown />
            </span>
          </S.Rate>
        </div>
        <div className="d-flex">
          <S.PriceButton>
            <S.Line>Get</S.Line>
            <S.Price>0.10901</S.Price>
          </S.PriceButton>
          <S.Rate>
            <Bitcoin />
            BTC
            <span>
              <ArrowDown />
            </span>
          </S.Rate>
        </div>
        <S.BuyingButton>Buy Now</S.BuyingButton>
      </div>
      <div>
        <img className="img-fluid" src={BuyButton} alt="buyingbutton" />
      </div>
    </S.Card>
  );
};
