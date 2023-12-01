import Card from "../../assets/images/CreditCard.png";
import * as C from "./CreditCardStyled";
import Icon from "../../Icon/Icon";

export const CreditCard = () => {
  return (
    <C.Card className="container row">
      <div className=" col-12 col-md-6">
        <C.CardPicture className="img-fluid" src={Card} alt="CreditCard" />
      </div>
      <C.Text className="col-12 col-md-6">
        <C.Title>
          Introducing the <span>NEFA </span>
          <p> Credit Card</p>
        </C.Title>
        <p>
          Subject to cardholder and rewards terms which will be available at
          application.
        </p>
        <div className="mb-2">
          <div className="mb-2">
            <span className="me-2">
              <Icon />
            </span>
            Up to 3% back on purchases
          </div>
          <div className="mb-2">
            <span className="me-2">
              <Icon />
            </span>
            Earn rewards in bitcoin or any crypto on NEFA
          </div>
          <div className="mb-2">
            <span className="me-2">
              <Icon />
            </span>
            No annual fee
          </div>

          <C.Button>Join the waitlist</C.Button>
        </div>
      </C.Text>
    </C.Card>
  );
};
