const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#2F7CF0"
      fillRule="evenodd"
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Icon;
