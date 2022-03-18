import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseAction, decreaseAction } from "./store/action/counterAction";
import { useEffect } from "react";
import { getProductListAction } from "./store/action/productAction";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.productStore);
  const { productList } = store;

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, key) => (
            <tr>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
