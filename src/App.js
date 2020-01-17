import React from "react";

import Navbar from "./navigation/Navbar";
import Home from "./views/Home";
import About from "./views/About/index";
import Stock from "./views/Stock";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    "@media all and (-ms-high-contrast:none)": {
      height: 0 // IE11 fix
    }
  },
  content: {
    paddingTop: 64,
    flexGrow: 1,
    maxWidth: "100%",
    overflowX: "hidden"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App" style={{ backgroundColor: "	#E0E0E0" }}>
      <Router>
        <Navbar />

        <div className={classes.container}>
          <div className={classes.content}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/stock/:stockSymbol">
                <Stock />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
