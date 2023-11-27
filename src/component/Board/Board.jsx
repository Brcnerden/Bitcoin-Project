import Chevron from "../../Icon/Chevron";
import Table from "./Table";

export const Board = () => {
  return (
    <>
      <div className="d-flex flex-column gap-4 w-100">
        <div className="d-flex justify-content-between align-items-center w-100">
          <span>🔥Trending</span>
          <button className="btn text-primary">
            More
            <Chevron />
          </button>
        </div>
        <Table />
      </div>
    </>
  );
};
