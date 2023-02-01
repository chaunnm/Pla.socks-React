import "./TableChart.scss";

function TableChartBook() {
  return (
    <div data-aos="zoom-in" className="table-container">
      <div className="table-caption">Top Products</div>
      <table className="table-chart">
        <thead className="table-chart-thead">
          <tr className="thead-tr">
            <th className="thead-th">Product</th>
            <th className="thead-th">Amount</th>
            <th className="thead-th">Price</th>
          </tr>
        </thead>
        <tbody className="table-chart-tbody">
          <tr className="tbody-tr">
            <td className="tbody-td">Socks For Summer</td>
            <td className="tbody-td">60</td>
            <td className="tbody-td">60.000đ</td>
          </tr>

          <tr className="tbody-tr">
            <td className="tbody-td">Socks For Women</td>
            <td className="tbody-td">50</td>
            <td className="tbody-td">40.000đ</td>
          </tr>

          <tr className="tbody-tr">
            <td className="tbody-td">Socks For Men</td>
            <td className="tbody-td">48</td>
            <td className="tbody-td">36.000đ</td>
          </tr>

          <tr className="tbody-tr">
            <td className="tbody-td">Socks For Kids</td>
            <td className="tbody-td">30</td>
            <td className="tbody-td">62.000đ</td>
          </tr>

          <tr className="tbody-tr">
            <td className="tbody-td">Boxes Of Love</td>
            <td className="tbody-td">20</td>
            <td className="tbody-td">35.000đ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableChartBook;
