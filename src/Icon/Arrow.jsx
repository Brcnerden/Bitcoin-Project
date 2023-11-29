const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10.793.793a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.086 6.5H1.5a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Arrow;
