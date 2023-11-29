import Chevron from "../../Icon/Chevron";

export const Board = ({ title }) => {
  return (
    <>
      <div className="d-flex flex-column gap-4 w-100 mt-4">
        <div className="d-flex justify-content-between align-items-center w-90">
          <span>{title}</span>
          <button className="btn text-primary">
            More
            <Chevron />
          </button>
        </div>
      </div>
    </>
  );
};
