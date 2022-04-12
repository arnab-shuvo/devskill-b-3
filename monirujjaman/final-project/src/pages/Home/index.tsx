import { Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Product from "../../components/Product";
import Loader from "../../loader";
import { GetProductListAsync } from "../../utilis/API/Product";
import { ProductReadDto } from "../../utilis/DTOs/Product";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [products, setProducts] = React.useState<ProductReadDto[]>(
    {} as ProductReadDto[]
  );
  const [totalProduct, setTotalProduct] = React.useState<number>(0);

  const [productList, setProductList] = React.useState<ProductReadDto[]>(
    {} as ProductReadDto[]
  );

  let limit = 6;

  const ChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    const filter = (page - 1) * limit;
    const data = productList.slice(filter, filter + limit);
    setProducts(data);
  };

  React.useEffect(() => {
    const fatchData = async () => {
      const data = await GetProductListAsync();
      setProducts(data.slice(0, limit));
      setProductList(data);
      setTotalProduct(products.length / limit);
      setCurrentPage(1);
    };
    fatchData().catch(console.error);
  }, []);

  return (
    <>
      {products.length ? (
        <Container sx={{ marginTop: "100px" }}>
          <Grid
            container
            justifyContent={"center"}
            spacing={3}
            columns={{ xs: 6, sm: 8, md: 12 }}
          >
            {products.map((_, index) => (
              <Product product={_} key={index} />
            ))}
          </Grid>
          <Grid container justifyContent={"center"} marginY={5}>
            <PaginationPage
              count={Math.ceil(productList.length / limit)}
              page={currentPage}
              onChange={(e, p) => ChangePage(e, p)}
            />
          </Grid>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;

type PaginationProps = {
  count: number;
  page: number;
  onChange: (e: React.ChangeEvent<unknown>, page: number) => void;
};

function PaginationPage({ count, page, onChange }: PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        color="primary"
        defaultPage={1}
        page={page}
        onChange={(e, p) => onChange(e, p)}
      />
    </Stack>
  );
}
