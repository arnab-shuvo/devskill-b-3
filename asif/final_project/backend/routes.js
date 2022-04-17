import {
  create_cart,
  create_category,
  create_order,
  create_product,
  customer_login,
  customer_profile,
  customer_signup,
  delete_cart,
  delete_category,
  delete_order,
  delete_product,
  get_all_categories,
  get_carts,
  get_category_products,
  get_customer_order,
  get_all_order,
  get_product,
  get_products,
  update_cart,
  update_category,
  update_customer_profile,
  update_order,
  update_product,
  admin_login,
  delete_all_cart,
  delete_customers_all_order,
  get_all_customer,
  change_customer_status,
  delete_customer,
} from "./controller.js";

export default (app) => {
  app.get("/category/category-products", get_category_products);
  app.get("/category", get_all_categories);
  app.post("/category/create-category", create_category);
  app.post("/category/update-category", update_category);
  app.get("/category/delete-category", delete_category);
  //
  //
  //
  app.get("/products", get_products);
  app.get("/products/product/:product_id", get_product);
  app.post("/products/create-product", create_product);
  app.post("/products/update-product", update_product);
  app.get("/products/delete-product", delete_product); //
  //
  //
  app.get("/carts", get_carts);
  app.post("/carts/create-cart", create_cart);
  app.post("/carts/update-cart", update_cart);
  app.get("/carts/delete-cart", delete_cart);
  app.get("/carts/delete-all-carts", delete_all_cart);
  //
  //
  //
  app.get("/orders", get_all_order);
  app.get("/orders/customer-order", get_customer_order);
  app.post("/orders/create-order", create_order);
  app.post("/orders/update-order", update_order);
  app.get("/orders/delete-order", delete_order);
  app.get("/orders/delete-customers-all-order", delete_customers_all_order);
  //
  //
  //

  app.get("/customer/profile/:token", customer_profile);
  app.post("/customer/update-profile", update_customer_profile);
  app.post("/customer/customer-signup", customer_signup);
  app.post("/customer/customer-login", customer_login);
  //
  //
  //
  app.post("/admin/login", admin_login);
  app.get("/admin/get-all-customers", get_all_customer);
  app.get("/admin/change-customer-status", change_customer_status);
  app.get("/admin/delete-customer", delete_customer);
};
