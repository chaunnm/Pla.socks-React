import { MdCenterFocusStrong } from "react-icons/md";

export const userColumns = [
  {
    field: "id",
    headerName: "STT",
    headerAlign: "center",
    width: 60,
    align: "center",
  },
  {
    field: "barcode",
    headerAlign: "center",
    headerName: "Order ID",
    align: "center",
    width: 130,
  },
  {
    field: "employeeName",
    headerName: "Owner",
    headerAlign: "center",
    align: "center",
    width: 200,
  },

  {
    field: "status",
    headerName: "Status",
    headerAlign: "center",
    align: "center",
    width: 170,
    renderCell: (params) => {
      let a;
      if (params.row.status === "Canceled") {
        a = "Canceled";
      } else if (params.row.status === "Shipped") {
        a = "Shipped";
      } else if (params.row.status === "Processing") {
        a = "Processing";
      } else if (params.row.status === "Shipping") {
        a = "Shipping";
      }

      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {/* {params.row.status}  */}
          {a}
        </div>
      );
    },
  },

  {
    field: "date",
    headerAlign: "center",
    headerName: "Booking Date",
    align: "center",
    width: 150,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    barcode: "BT012345",
    employeeName: "Henry Nguyen",
    status: "Canceled",
    date: "05/08/2022",
  },
  {
    id: 2,
    barcode: "BT012345",
    employeeName: "Doe Smith",
    status: "Shipped",
    date: "05/08/2022",
  },
  {
    id: 3,
    barcode: "BT012345",
    employeeName: "Tailor",
    status: "Processing",
    date: "05/08/2022",
  },
  {
    id: 4,
    barcode: "BT012345",
    employeeName: "NhanPham",
    status: "Shipping",
    date: "05/08/2022",
  },
];
