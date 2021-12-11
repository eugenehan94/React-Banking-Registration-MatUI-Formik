import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <AccountBalanceIcon fontSize="large" onClick={() => navigate("/")} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
