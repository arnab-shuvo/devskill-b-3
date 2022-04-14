import { Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  on_delete_cart,
  change_cart_quantity,
  delete_all_carts,
  get_carts,
} from "../../store/thunks/cart_thunks";
import { on_order } from "../../store/thunks/order_thunks";
import "./cart_page.css";
const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart_reducer } = useSelector((store) => store);

  //
  //
  //
  const get_total_price = () => {
    let price = 0;
    cart_reducer.map((cart) => (price += cart.price));
    return price;
  };
  //
  //
  //

  useEffect(() => dispatch(get_carts(navigate)), []);

  return (
    <>
      {cart_reducer.length == 0 ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <h1>Carts</h1>
          <div className="cart-page-list">
            {cart_reducer.map((cart, index) => (
              <div className="cart-item">
                <h3>{cart.name}</h3>
                <img className="cart-image" src={cart.image} alt={cart.name} />
                <p>
                  <strong>Price</strong> : {cart.price}
                </p>

                <p>
                  <strong>Quantity</strong> : {cart.quantity}
                </p>
                <div className="cart-actions">
                  <div className="top">
                    <Button
                      onClick={() =>
                        dispatch(
                          change_cart_quantity(
                            index,
                            cart.id,
                            cart.quantity - 1,
                            cart.price - cart.price / cart.quantity
                          )
                        )
                      }
                      color="error"
                      variant="contained"
                    >
                      -
                    </Button>
                    <p>Change Quantity</p>
                    <Button
                      onClick={() =>
                        dispatch(
                          change_cart_quantity(
                            index,
                            cart.id,
                            cart.quantity + 1,
                            cart.price + cart.price / cart.quantity
                          )
                        )
                      }
                      color="primary"
                      variant="contained"
                    >
                      +
                    </Button>
                  </div>
                  <div className="bottom">
                    <p>Delete Cart</p>
                    <IconButton
                      onClick={() => dispatch(on_delete_cart(index, cart.id))}
                    >
                      <Delete />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-page-footer">
            <div className="first">
              <p>
                <strong>Total Price</strong> : {get_total_price()}
              </p>
              <Button
                onClick={() => dispatch(on_order(navigate))}
                className="order-button"
                variant="contained"
                color="success"
              >
                Make Order?
              </Button>
            </div>
            <Button
              onClick={() => dispatch(delete_all_carts(navigate))}
              variant="contained"
              color="error"
            >
              Delete All Carts
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
