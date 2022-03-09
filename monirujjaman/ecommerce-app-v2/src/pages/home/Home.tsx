import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => (
  <Container>
    <Grid container justifyContent={"center"}>
      <Grid item marginTop={50}>
        <Link
          to="/product"
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="contained">Product List</Button>
        </Link>
      </Grid>
    </Grid>
  </Container>
);

export default Home;
