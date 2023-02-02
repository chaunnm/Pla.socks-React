import "./TableChart.scss";

function TableChart() {
  return (
    <div data-aos="zoom-in" className="table-container">
      <div className="table-caption">Top category - Socks sold</div>
      <table className="table-chart">
        <thead className="table-chart-thead">
          <tr className="thead-tr">
            <th className="thead-th">Category</th>
            <th className="thead-th">Amount</th>
            <th className="thead-th">Total price</th>
          </tr>
        </thead>
        <tbody className="table-chart-tbody">
          <tr className="tbody-tr">
            <td className="tbody-td">All</td>
            <td className="tbody-td">9</td>
            <td className="tbody-td">1.236.000đ</td>
          </tr>
          <tr className="tbody-tr">
            <td className="tbody-td">Socks For Women</td>
            <td className="tbody-td">3</td>
            <td className="tbody-td">420.000đ</td>
          </tr>

          <tr className="tbody-tr">
            <td className="tbody-td">Socks For Summer</td>
            <td className="tbody-td">2</td>
            <td className="tbody-td">90.000đ</td>
          </tr>

          <tr className="tbody-tr">
            <td className="tbody-td">Sock For Men</td>
            <td className="tbody-td">2</td>
            <td className="tbody-td">540.000đ</td>
          </tr>

          <tr className="tbody-tr">
            <td className="tbody-td">Boxes Of Love</td>
            <td className="tbody-td">2</td>
            <td className="tbody-td">186.000đ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableChart;
