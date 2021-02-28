import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteVehicleData, getVehicleData } from "./DashboardRedux/action";
import { useHistory } from "react-router-dom";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { EditVehicle } from "../EditVehicle";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
export const Dashboard = (props) => {
  const classes = useStyles();
  const modalClasses = useModalStyles();

  const [modalStyle] = useState(getModalStyle);

  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const vehicles = useSelector((state) => state.vehicleData.data);
  const isLoading = useSelector((state) => state.vehicleData.isLoading);
  const isError = useSelector((state) => state.vehicleData.error);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [query, setQuery] = useState(null);
  const limit = 5;

  const handleDelete = (id) => {
    dispatch(deleteVehicleData(id));
  };

  useEffect(() => {
    dispatch(getVehicleData(page, limit));
  }, [page]);

  // const handleSearch = () => {
  //   dispatch(getVehicleData(page, limit));
  // };

  const handleClick = (id) => {
    const { url } = props.match;
    // console.log(`${url}/${id}`);
    history.push(`${url}/${id}`);
  };

  const handleSort = () => {
    setSort(1);
  };

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState("");
  const handleOpen = (id) => {
    setOpen(true);
    setEditId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={modalClasses.paper}>
      <EditVehicle vehicles={vehicles} editId={editId} />
    </div>
  );
  const [type, setType] = useState("");

  const handleClear = () => {
    setQuery(null);
    setSort(null);
    setType("");
    dispatch(getVehicleData(page, limit));
  };

  console.log(vehicles);
  return isAuth ? (
    isLoading ? (
      <h3>Loading...</h3>
    ) : (
      <>
        <Button variant="contained" size="small" onClick={handleSort}>
          Sort By Capacity
        </Button>
        <br />
        <br />
        <TextField
          value={query}
          size="small"
          onChange={(e) => setQuery(e.target.value)}
          label="Enter Vehicle Reg no"
          variant="outlined"
        />

        {/* <Button
          variant="contained"
          size="small"
          onClick={handleSearch}
          // color="primary"
        >
          Search Vehicle
        </Button> */}
        <br />
        <br />
        <FormControl>
          <InputLabel> Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value={10}>Car</MenuItem>
            <MenuItem value={20}>Van</MenuItem>
            <MenuItem value={30}>Bus</MenuItem>
          </Select>
        </FormControl>

        <br />
        <br />
        <Button variant="contained" size="small" onClick={handleClear}>
          Clear filters
        </Button>
        <br />
        <br />
        <button onClick={() => setPage((page) => page - 1)} disabled={page < 2}>
          Prev
        </button>
        <button onClick={() => setPage((page) => page + 1)}>Next</button>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Vehicle</StyledTableCell>
                <StyledTableCell align="right">No of Trips</StyledTableCell>
                <StyledTableCell align="right">
                  Type&nbsp;(Car/Van/Bus)
                </StyledTableCell>
                <StyledTableCell align="right">Regn no.</StyledTableCell>
                <StyledTableCell align="right">Capacity</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles &&
                vehicles
                  .sort((a, b) => {
                    if (sort == null) {
                      return 0;
                    } else {
                      return a.capacity - b.capacity;
                    }
                  })
                  .filter((item) => {
                    if (query == null) {
                      return item;
                    } else {
                      return item.regNo === query;
                    }
                  })
                  .filter((item) => {
                    // if (type == "") {
                    //   return item;
                    // }
                    if (type == "10") {
                      return item.type === "Car";
                    }
                    if (type == "20") {
                      return item.type === "Van";
                    }
                    if (type == "30") {
                      return item.type === "Bus";
                    } else {
                      return item;
                    }
                  })
                  .map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        onClick={(id) => handleClick(row.id)}
                      >
                        <img src={row.avatar} width="200px" />
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        onClick={(id) => handleClick(row.id)}
                      >
                        {row.make}, {row.model}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.noOfTrips}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.type}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.regNo}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.capacity}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        onClick={() => handleOpen(row._id)}
                      >
                        Edit
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        onClick={() => handleDelete(row._id)}
                      >
                        Delete
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="caption">
          Click on the Vehicle Image/Name to view the vehicle Trip details
        </Typography>
        <Modal open={open} onClose={handleClose}>
          {body}
        </Modal>
        {isError && <h5>Oops, Something went wrong!</h5>}
      </>
    )
  ) : (
    <h5>Please Login</h5>
  );
};
