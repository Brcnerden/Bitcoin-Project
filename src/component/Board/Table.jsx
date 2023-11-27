import Table from "react-bootstrap/Table";
import Bitcoin from "../../Icon/Bitcoin";
import Ethereum from "../../Icon/Ethereum";
import Rise from "../../assets/images/Rise.jpg";
import Decreasing from "../../assets/images/Decreasing.jpg";
function MoneyTable() {
  return (
    <Table striped hover>
      <thead>
        <tr className="col">
          <th className="fw-normal">Name</th>
          <th className="fw-normal">Price</th>
          <th className="fw-normal">Chart</th>
        </tr>
      </thead>
      <tbody>
        <td>
          <Bitcoin />
          <span className="fw-light">Bitcoin</span>
        </td>
        <td>
          <span className="text-success fw-bold">+</span>$43,180.13
        </td>
        <td>
          <img src={Rise} alt="Rise" />
        </td>
      </tbody>
      <tbody>
        <td>
          <Ethereum />
          <span className="fw-light">Ethereum</span>
        </td>
        <td>
          <span className="text-danger fw-bold">-</span>$3,480.65
        </td>
        <td>
          <img src={Decreasing} alt="Rise" />
        </td>
      </tbody>
      <tbody>
        <td>
          <span className="fw-light">Bitcoin</span>
        </td>
        <td>
          <span className="text-success fw-bold">+</span>$43,180.13
        </td>
        <td>
          <img src={Rise} alt="Rise" />
        </td>
      </tbody>
    </Table>
  );
}

export default MoneyTable;
