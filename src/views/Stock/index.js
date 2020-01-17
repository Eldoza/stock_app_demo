import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    marginTop: "2%",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  card: {
    textAlign: "center"
  }
});

const Stock = () => {
  const classes = useStyles();

  let { stockSymbol } = useParams();
  const [currentStock, setCurrentStock] = useState();

  useEffect(() => {
    axios.get("../data/stock-data.json").then(res => {
      console.log("res --->", res.data);
      let stock = res.data.find(d => d.symbol === stockSymbol);
      setCurrentStock(stock);
    });
  }, []);
  console.log("current stock ===>", currentStock);
  return (
    <Paper className={classes.root}>
      <Card raised>
        <CardContent className={classes.card}>
          {currentStock && (
            <>
              <Typography variant="h3" gutterBottom>
                {currentStock.name}
              </Typography>
              <Divider variant="middle" style={{marginBottom: '15px'}} />
              <Typography variant="h6" gutterBottom>
                Symbol: {currentStock.symbol}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Last Price: ${currentStock.lastPrice}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Change: {currentStock.change}
              </Typography>
              <Typography variant="h6" gutterBottom>
                High: {currentStock.high}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Low: {currentStock.low}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Open: {currentStock.open}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Stock;
