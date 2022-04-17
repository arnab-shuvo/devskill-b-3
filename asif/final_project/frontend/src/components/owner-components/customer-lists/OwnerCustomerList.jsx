import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  change_customer_status,
  get_customer_list,
  delete_customer,
} from "../../../store/thunks/owner_thunk";
import "./owner_customer_list_styles.css";
const OwnerCustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const execute = async () => {
      const customer_got = await get_customer_list(navigate);
      customer_got && setCustomers(customer_got);
    };
    execute();
  }, []);

  return (
    <div className="customer-list-container">
      {customers.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Customer List</h1>
          <div className="customer-list">
            {customers.map((customer, index) => (
              <div className="customer">
                <img alt={customer.name} src={customer.image} />
                <h3>{customer.name}</h3>
                <p>
                  {customer.order_status == "pending"
                    ? "Order Status : pending ..."
                    : "No orders"}
                </p>
                {customer.status == "available" ? (
                  <Button
                    onClick={() =>
                      change_customer_status(
                        index,
                        customer.id,
                        "blocked",
                        setCustomers
                      )
                    }
                    color="error"
                    variant="contained"
                  >
                    Block Customer
                  </Button>
                ) : (
                  <Button
                    onClick={() =>
                      change_customer_status(
                        index,
                        customer.id,
                        "available",
                        setCustomers
                      )
                    }
                    color="primary"
                    variant="contained"
                  >
                    Make Available
                  </Button>
                )}
                <Button
                  onClick={() =>
                    delete_customer(index, customer.id, setCustomers)
                  }
                  color="error"
                  variant="contained"
                >
                  Delete Customer
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OwnerCustomerList;
