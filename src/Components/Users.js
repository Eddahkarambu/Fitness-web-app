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

function createData(number, name, email) {
  return { number, name, email };
}

const rows = [
  createData(1, "eddah", "eddah@gmail.com"),
  createData(2, "karambu", "kara@gmail.com"),
  createData(3, "ericko", "erick@gmail.com"),
];

function Users({ getAllUsers }) {
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.number}>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
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

export default connect(null, mapDispatchToProps)(Users);
