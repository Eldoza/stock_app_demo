import React from "react";
import { AppBar, Toolbar, Typography, Link, Grid } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <Link
              component={RouterLink}
              to="/"
              variant="h6"
              color="textPrimary"
              underline="none"
            >
              <Typography variant="h6">Home</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link
              component={RouterLink}
              to="/about"
              variant="h6"
              color="textPrimary"
              underline="none"
            >
              <Typography variant="h6">About</Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
