import { Board } from "./Board";
import Table from "./Table";

import Bitcoin from "../../Icon/Bitcoin";
import Ethereum from "../../Icon/Ethereum";
import Solana from "../../Icon/Solana";
import Doge from "../../Icon/Doge";
import * as T from "./MoneyBoardStyled";

import Rise from "../../assets/images/Rise.jpg";
import Decreasing from "../../assets/images/Decreasing.jpg";

export const MoneyBoard = () => {
  return (
    <div className="row">
      <T.Tablo className="gap-3 flex">
        <div className="flex-column ">
          <Board title="🔥 Trending" />
          <Table
            icon={<Bitcoin />}
            title="Bitcoin"
            price="$43,180.13"
            status={Rise}
            icon1={<Ethereum />}
            title1={"Ethereum"}
            price1="$3, 480.65"
            status1={Decreasing}
            icon2={<Solana />}
            title2="Solana"
            price2="$150,20"
            status2={Rise}
            icon3={<Doge />}
            title3="Dogecoin"
            price3="$0,1572"
            status3={Rise}
          />
        </div>
        <div className="flex-column">
          <Board title="🚀  Top Gainers" />
          <Table
            icon={<Bitcoin />}
            title="Bitcoin"
            price="$43,180.13"
            status={Rise}
            icon1={<Ethereum />}
            title1={"Ethereum"}
            price1="$3, 480.65"
            status1={Decreasing}
            icon2={<Solana />}
            title2="Solana"
            price2="$150,20"
            status2={Rise}
            icon3={<Doge />}
            title3="Dogecoin"
            price3="$0,1572"
            status3={Rise}
          />
        </div>
        <div className="flex-column">
          <Board title="💎  Recently Added" />
          <Table
            icon={<Bitcoin />}
            title="Bitcoin"
            price="$43,180.13"
            status={Rise}
            icon1={<Ethereum />}
            title1={"Ethereum"}
            price1="$3, 480.65"
            status1={Decreasing}
            icon2={<Solana />}
            title2="Solana"
            price2="$150,20"
            status2={Rise}
            icon3={<Doge />}
            title3="Dogecoin"
            price3="$0,1572"
            status3={Rise}
          />
        </div>
      </T.Tablo>
    </div>
  );
};
