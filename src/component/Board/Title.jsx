import Chevron from "../../Icon/Chevron";

export const Title = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center w-100">
        <span>🔥Trending</span>
        <button className="btn text-primary">
          More
          <Chevron />
        </button>
      </div>
    </div>
  );
};
