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

function Users({ getAllUsers, allUsers }) {
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
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
  );
}

const mapDispatchToProps = {
  getAllUsers: getUsers,
};

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    allUsers: users.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
