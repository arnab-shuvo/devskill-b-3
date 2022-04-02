import { Container, Grid } from "@mui/material";
import Product from "../../components/Product";

const Home: React.FC = () => {
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Grid
        container
        justifyContent={"center"}
        spacing={3}
        columns={{ xs: 6, sm: 8, md: 12 }}
      >
        {Array.from(Array(20)).map((_, index) => (
          <Product key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
