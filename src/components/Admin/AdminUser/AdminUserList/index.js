import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/features/user/allUsersSlice";
import {
  deleteUser,
  clear,
} from "../../../../redux/features/user/userDetailsSlice";
import "./UserList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./UserData";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
// import { Button } from "@mui/material";
import { Form, Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const UserList = () => {
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.allUsers);
  const { success, message } = useSelector((state) => state.userDetails);
  const { registerSuccess, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  useEffect(() => {
    if (users) {
      setData(() => {
        return users.map((user, index) => {
          return {
            id: index,
            name: user.name,
            email: user.email,
            role: user.role,
            userId: user._id,
          };
        });
      });
    }
  }, [users]);
  useEffect(() => {
    if (success) {
      toast.success(message);
    }
    if (success === false) {
      toast.error(message);
    }
    dispatch(clear());
  }, [success]);

  const handleDeleteUser = () => {
    dispatch(deleteUser({ id: idDelete }));
    setShow(false);
  };
  const handleDelete = (id) => {
    handleShow();
    console.log("id delete", id);
    setIdDelete(id);
    // setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 120,
      headerAlign: "center",
      align: "center",
      minWidth: 100,
      maxwidth: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to="/admin-user-edit"
              state={{ userId: params.row.userId }}
              style={{ textDecoration: "none" }}
            >
              <div className="editButton">
                <BiEdit />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.userId)}
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
      <div className="datatableTitle">
        User List
        <Link
          data-aos="zoom-in"
          data-aos-duration="1000"
          to="/admin-user-new"
          className="link link-backgound"
        >
          <FaUserPlus className="addUser" />
          Add new
        </Link>
      </div>
      <DataGrid
        className="datagrid grid-auto-columns grid-auto-rows"
        rows={data.length > 0 ? data : []}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default UserList;
