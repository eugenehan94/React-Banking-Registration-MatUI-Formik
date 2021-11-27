import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const NavBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4">Bank</Typography>
          <AccountBalanceIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
