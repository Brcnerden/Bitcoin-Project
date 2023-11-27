import Table from "react-bootstrap/Table";
function MoneyTable({
  icon,
  title,
  price,
  status,
  icon1,
  title1,
  price1,
  status1,
  icon2,
  title2,
  price2,
  status2,
  icon3,
  title3,
  price3,
  status3,
}) {
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
          {icon}
          <span className="fw-light">{title}</span>
        </td>
        <td>
          <span className="text-success fw-bold">+</span>
          {price}
        </td>
        <td>
          <img src={status} alt="Rise" />
        </td>
      </tbody>
      <tbody>
        <td>
          {icon1}
          <span className="fw-light">{title1}</span>
        </td>
        <td>
          <span className="text-danger fw-bold">-</span>
          {price1}
        </td>
        <td>
          <img src={status1} alt="Rise" />
        </td>
      </tbody>
      <tbody>
        <td>
          {icon2}
          <span className="fw-light">{title2}</span>
        </td>
        <td>
          <span className="text-success fw-bold">+</span>
          {price2}
        </td>
        <td>
          <img src={status2} alt="Rise" />
        </td>
      </tbody>
      <tbody>
        <td>
          {icon3}
          <span className="fw-light">{title3}</span>
        </td>
        <td>
          <span className="text-success fw-bold">+</span>
          {price3}
        </td>
        <td>
          <img src={status3} alt="Rise" />
        </td>
      </tbody>
    </Table>
  );
}

export default MoneyTable;
