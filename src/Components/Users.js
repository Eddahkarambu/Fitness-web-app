import React, { useEffect } from "react";
import "./Users.css";
import { connect } from "react-redux";
import { getUsers } from "../Redux/Actions/user.actions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Users({ getAllUsers, allUsers, error, loading }) {
  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    loading ? setOpen(true) : setOpen(false);
  }, [error, loading]);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
      <div className="table">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">User Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((user, index) => (
                <TableRow key={user._id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.userRole}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  getAllUsers: getUsers,
};

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    allUsers: users.users,
    error: users.error,
    loading: users.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
