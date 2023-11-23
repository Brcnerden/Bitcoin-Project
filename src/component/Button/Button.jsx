import * as B from "./ButtonStyled";

function Buttons({ text, color }) {
  return (
    <>
      <B.Button color={color}>{text}</B.Button>
    </>
  );
}

export default Buttons;
