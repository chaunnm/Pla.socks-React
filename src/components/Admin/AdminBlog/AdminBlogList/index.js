import "./BlogList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./BlogData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdNoteAdd } from "react-icons/md";
import { Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

const BlogList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 120,
      minWidth: 100,
      maxwidth: 180,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin-blog-edit" style={{ textDecoration: "none" }}>
              <div className="viewButton">
                <BiEdit />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <MdDelete />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="datatable">
      <div className="col-xl-6 col-lg-5 col-md-6">
        <form action="#" className="search-header">
          <div className="input-group w-100">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append">
              <Button variant="dark">
                <SearchIcon />
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="datatableTitle">
        <span>Blog List</span>
        <Link to="/admin-blog-new" className="link">
          <MdNoteAdd className="addBlog" />
          Add new
        </Link>
      </div>
      <DataGrid
        className="datagrid grid-auto-columns grid-auto-rows"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default BlogList;
