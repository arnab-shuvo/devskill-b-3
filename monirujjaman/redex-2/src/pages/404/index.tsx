import { Container, Grid } from "@mui/material";

const Error404 = () => (
  <Container>
    <Grid
      container
      justifyContent={"center"}
      alignItems="center"
      minHeight={"90vh"}
      direction="column"
    >
      <Grid item textAlign={'center'}>
        <h1>404</h1>
        <p>Sorry this page not available</p>
      </Grid>
    </Grid>
  </Container>
);

export default Error404;
