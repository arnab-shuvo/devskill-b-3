import { AppBar, Toolbar, Typography } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            bgcolor: "white",
            justifyContent: "space-between",
            paddingX: "50px",
          }}
        >
          <Typography color={"black"} variant="h5" component="h5">
            LOGO
          </Typography>
          <Typography color={"black"} variant="h6" component="div">
            Menu
          </Typography>
          <Typography color={"black"} variant="h6" component="div">
            Signin
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
