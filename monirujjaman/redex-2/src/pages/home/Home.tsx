import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => (
  <Container>
    <Grid container justifyContent={"center"} alignItems="center">
      <Grid item marginTop={50} textAlign="center">
        <Link
          to="/product"
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="contained">Product List</Button>
        </Link>
        <br />
        <br />
        <Link
          to="/createproduct"
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="contained">Create Product</Button>
        </Link>
      </Grid>
    </Grid>
  </Container>
);

export default Home;
