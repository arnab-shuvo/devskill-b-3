import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  let activeClassName = '';
  return (
    <>
      <Grid
        container
        minHeight={60}
        bgcolor="white"
        justifyContent="center"
        alignItems="center"
        gap={5}
        sx={{
          boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
        }}
      >
        <Grid item>
          <NavLink
            to="/"
            style={{textDecoration: 'none'}}
            className={({ isActive }) =>
              isActive ? `${classes.activeNav}` : undefined
            }
          >
            Home
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/product"
            style={{textDecoration: 'none'}}
            className={({ isActive }) =>
              isActive ? `${classes.activeNav}` : undefined
            }
          >
            Product
          </NavLink>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
