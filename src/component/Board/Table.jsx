import Table from "react-bootstrap/Table";
import * as T from "./Tablestyled";
function MoneyTable({
  icon,
  title,
  price,
  status,
  sign,
  icon1,
  title1,
  price1,
  status1,
  sign1,
  icon2,
  title2,
  price2,
  status2,
  sign2,
  icon3,
  title3,
  price3,
  status3,
  sign3,
}) {
  return (
    <Table className="ml-auto mr-auto mt-2" striped hover>
      <thead>
        <tr className="col">
          <th className="fw-normal">Name</th>
          <th className="fw-normal">Price</th>
          <th className="fw-normal">Chart</th>
        </tr>
      </thead>
      <tbody>
        <td>
          {icon}
          <span className="fw-light">{title}</span>
        </td>
        <td>
          <span className="text-success fw-bold">{sign}</span>
          {price}
        </td>
        <td>
          <T.Picture src={status} alt="Rise" />
        </td>
      </tbody>
      <tbody>
        <td>
          {icon1}
          <span className="fw-light">{title1}</span>
        </td>
        <td>
          <span className="text-danger fw-bold">{sign1}</span>
          {price1}
        </td>
        <td>
          <T.Picture src={status1} alt="Rise" />
        </td>
      </tbody>
      <tbody>
        <td>
          {icon2}
          <span className="fw-light">{title2}</span>
        </td>
        <td>
          <span className="text-success fw-bold">{sign2}</span>
          {price2}
        </td>
        <td>
          <T.Picture src={status2} alt="Rise" />
        </td>
      </tbody>
      <tbody>
        <td>
          {icon3}
          <span className="fw-light">{title3}</span>
        </td>
        <td>
          <span className="text-success fw-bold">{sign3}</span>
          {price3}
        </td>
        <td>
          <T.Picture src={status3} alt="Rise" />
        </td>
      </tbody>
    </Table>
  );
}

export default MoneyTable;
