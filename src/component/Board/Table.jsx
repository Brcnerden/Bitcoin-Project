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

          <T.Chart className="fw-normal">Chart</T.Chart>
        </tr>
      </thead>
      <T.Text>
        <T.Icon>
          {icon}
          <span className="fw-light">{title}</span>
        </T.Icon>
        <td>
          <span className="text-success fw-bold">{sign}</span>
          {price}
        </td>
        <T.PictureRow>
          <T.Picture src={status} alt="Rise" />
        </T.PictureRow>
      </T.Text>
      <T.Text>
        <T.Icon>
          {icon1}
          <span className="fw-light">{title1}</span>
        </T.Icon>
        <td>
          <span className="text-danger fw-bold">{sign1}</span>
          {price1}
        </td>
        <T.PictureRow>
          <T.Picture src={status1} alt="Rise" />
        </T.PictureRow>
      </T.Text>
      <T.Text>
        <T.Icon>
          {icon2}
          <span className="fw-light">{title2}</span>
        </T.Icon>
        <td>
          <span className="text-success fw-bold">{sign2}</span>
          {price2}
        </td>
        <T.PictureRow>
          <T.Picture src={status2} alt="Rise" />
        </T.PictureRow>
      </T.Text>
      <T.Text>
        <T.Icon>
          {icon3}
          <span className="fw-light">{title3}</span>
        </T.Icon>
        <td>
          <span className="text-success fw-bold">{sign3}</span>
          {price3}
        </td>
        <T.PictureRow>
          <T.Picture src={status3} alt="Rise" />
        </T.PictureRow>
      </T.Text>
    </Table>
  );
}

export default MoneyTable;
