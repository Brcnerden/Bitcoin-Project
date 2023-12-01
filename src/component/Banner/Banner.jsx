import * as B from "./BannerStyled";
import Clever from "../../assets/images/Clever.png";
import Diamond from "../../assets/images/Diamond.png";
import Swiss from "../../assets/images/Swiss.png";
import Gambio from "../../assets/images/Gambio.png";

export const Banner = () => {
  return (
    <div>
      <B.Banner>
        <div>
          <B.Title>Trusted Partners Worldwide</B.Title>
          <B.Text>
            We are partners with countless major organisations around the globe
          </B.Text>
        </div>
        <B.Brand className="sm-row md-row">
          <img src={Clever} alt="Clever" />
          <img src={Diamond} alt="Diamond" />
          <img src={Swiss} alt="Swiss" />
          <img src={Gambio} alt="Gambio" />
        </B.Brand>
      </B.Banner>
    </div>
  );
};
