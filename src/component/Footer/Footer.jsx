import Logo from "../../assets/images/FooterLogo.png";
import * as F from "./FooterStyled";
import Arrow from "../../Icon/Arrow";

export const Footer = () => {
  return (
    <>
      <F.BodyFooter className="container">
        <div className="row">
          <F.Header className="d-md-flex">
            <F.StartBox className="d-md-flex ">
              <F.Logo src={Logo} alt="Logo" />
              <F.Texts>
                <p>Buy Crypto</p>
                <p>Exchanges</p>
                <p>Watchlist</p>
                <p>Portfolio</p>
                <p>NFT</p>
              </F.Texts>
            </F.StartBox>

            <F.Texts>
              <p>Products</p>
              <p>Abous Us</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>Security</p>
            </F.Texts>
            <F.Texts>
              <p>Help Center</p>
              <p>Contact Us</p>
              <p>System Status</p>
              <p>Area of Avaibility</p>
              <p>Privacy Policy</p>
            </F.Texts>
            <F.Texts>
              <p>Newsletter</p>
              <div>Never miss anything crypto when you are on the go</div>
              <F.MailInput placeholder="enter your email"></F.MailInput>
              <F.ArrowButton>
                <Arrow />
              </F.ArrowButton>
            </F.Texts>
          </F.Header>
        </div>
      </F.BodyFooter>
      <F.LastSentence>
        © Copyright 2022 NEFA LLC. All rights reserved
      </F.LastSentence>
    </>
  );
};
