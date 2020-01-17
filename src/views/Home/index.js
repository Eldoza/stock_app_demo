import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { Card, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    marginTop: "2%",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  table: {
    minWidth: 650
  }
});

const Home = () => {
  const classes = useStyles();

  const [stocks, setStocks] = useState();

  useEffect(() => {
    axios.get("./data/stock-data.json").then(res => {
      setStocks(res.data);
    });
  }, []);

  return (
    <Paper className={classes.root}>
      <Card raised>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Last Price</TableCell>
              <TableCell align="right">Change</TableCell>
              <TableCell align="right">High</TableCell>
              <TableCell align="right">Low</TableCell>
              <TableCell align="right">Open</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks &&
              stocks.map((stock, idx) => (
                <TableRow key={stock.name}>
                  <TableCell>
                    <Button
                      color="primary"
                      variant="contained"
                      component={Link}
                      to={`/stock/${stock.symbol}`}
                    >
                      VIEW
                    </Button>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {stock.name}
                  </TableCell>
                  <TableCell align="right">{stock.symbol}</TableCell>
                  <TableCell align="right">{`$${stock.lastPrice}`}</TableCell>
                  <TableCell align="right">{stock.change}</TableCell>
                  <TableCell align="right">{`$${stock.high}`}</TableCell>
                  <TableCell align="right">{`$${stock.low}`}</TableCell>
                  <TableCell align="right">{`$${stock.open}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </Paper>
  );
};

export default Home;
