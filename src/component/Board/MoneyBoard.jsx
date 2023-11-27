import { Board } from "./Board";
import * as T from "./MoneyBoardStyled";

export const MoneyBoard = () => {
  return (
    <div className="row">
      <T.Tablo className="gap-3">
        <Board />
        <Board />
        <Board />
      </T.Tablo>
    </div>
  );
};
