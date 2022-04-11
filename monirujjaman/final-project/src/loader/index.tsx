import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => (
  <Grid
    sx={{
      height: "100vh",
    }}
    container
    justifyContent="center"
    alignContent="center"
    alignItems="center"
  >
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid>
);

export default Loader;
