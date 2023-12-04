import ArrowUp from "../../Icon/ArrowUp";
import Arrow from "../../Icon/LittleArrow";
import LittleArrowDown from "../../Icon/LittleArrowDown";
import CoinCave from "../../assets/images/CoinCave.png";
import * as S from "./SupportStyled";

export const Support = () => {
  return (
    <>
      <S.Boxes className="row container d-md-flex">
        <div className=" col-12 col-md-5">
          <img className="img-fluid" src={CoinCave} alt="CoinCave" />
        </div>
        <S.Box className="col-7">
          <S.Support>SUPPORT</S.Support>
          <S.Title>Frequently asked questions</S.Title>
          <S.Choose>
            Why should I choose NEFA?
            <span>
              <Arrow />
            </span>
          </S.Choose>
          <S.Text>
            We are industry pioneers, having been in the cryptocurrency industry
            since 2016. We have facilitated more than 21 billion USD worth of
            transactions on our exchange for customers in over 40 countries.
            Today, we are trusted by over 8 million customers around the world
            and have received praise for our easy-to-use app, secure wallet, and
            range of features.
          </S.Text>
          <S.Download>
            <hr />
            <div>
              <div>How secure is NEFA?</div>
              <span>
                <LittleArrowDown />
              </span>
            </div>
            <hr />

            <div>
              <div>Do I have to buy a whole Bitcoin?</div>
              <span>
                <LittleArrowDown />
              </span>
            </div>
            <hr />

            <div>
              <div>How do I actually buy Bitcoin?</div>
              <span>
                <LittleArrowDown />
              </span>
            </div>
            <hr />
          </S.Download>
        </S.Box>
      </S.Boxes>
      <S.ButtonLine>
        <S.Button>
          Back to top
          <span>
            <ArrowUp />
          </span>
        </S.Button>
      </S.ButtonLine>
    </>
  );
};
