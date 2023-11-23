import DropdownButton from "react-bootstrap/DropdownButton";

function DropdownHeader() {
  return (
    <>
      <DropdownButton
        className="btn btn-outline rounded-pill dropdown-toggle"
        id="dropdown-basic-button"
        title="Dropdown App"
      ></DropdownButton>
    </>
  );
}

export default DropdownHeader;
