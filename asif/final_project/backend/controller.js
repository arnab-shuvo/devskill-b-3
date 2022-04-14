import bcrypt from "bcrypt";
import moment from "moment";
import jsonwebtoken from "jsonwebtoken";
import prisma_client from "@prisma/client";
const { PrismaClient } = prisma_client;
const { customer, category, product, cart, order, admin } = new PrismaClient();
//
//
// required req.body:{email, name, password, number}
export const customer_signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const customer_exist = await customer.findFirst({
      where: { email: email },
    });
    if (customer_exist)
      return res.status(404).json({ message: "customer already exist" }).end();
    const encrypted_password = await bcrypt.hash(password, 11);

    const new_customer = await customer.create({
      data: {
        ...req.body,
        password: encrypted_password,
      },
    });
    return res.status(200).json(new_customer).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required req.body:{email, password}
export const customer_login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const customer_exist = await customer.findFirst({
      where: { email },
    });
    if (!customer_exist)
      return res
        .status(404)
        .json({ message: "customer dont exist. signup first" })
        .end();
    const password_matched = await bcrypt.compare(
      password,
      customer_exist.password
    );
    if (!password_matched)
      return res
        .status(404)
        .json({ message: "password doesn't matched!" })
        .end();
    const token = await jsonwebtoken.sign(
      {
        email,
        password: customer_exist.password,
      },
      "secret",
      { expiresIn: "1d" }
    );

    return res.status(200).json({ token, customer: customer_exist }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
// required req.params.token
export const customer_profile = async (req, res, next) => {
  try {
    const { password } = await jsonwebtoken.verify(req.params.token, "secret");
    const customer_profile = await customer.findFirst({
      where: { password },
    });
    if (!customer_profile)
      return res.status(200).json({ message: "cant find profile" }).end();
    return res.status(200).json({ customer: customer_profile }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//
// required {req.body:{token:token, data:data}}
export const update_customer_profile = async (req, res, next) => {
  try {
    const { id, name, email, number } = req.body.data;
    const updated_customer_profile = await customer.update({
      where: { id },
      data: { name, email, number },
      select: { name: true, email: true, number: true, id: true },
    });
    return res.status(200).json({ updated_customer_profile }).end();
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//
export const get_all_categories = async (req, res, next) => {
  try {
    const categories = await category.findMany();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
export const create_category = async (req, res, next) => {
  try {
    const new_category = await category.create({
      data: {
        ...req.body,
      },
    });
    return res.status(200).json({ category: new_category }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//required req.query.category_id and req.body.data
export const update_category = async (req, res, next) => {
  try {
    const updated_category = await category.update({
      where: { id: JSON.parse(req.query.category_id) },
      data: { ...req.body.data },
    });
    return res.status(200).json({ category: update_category }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

//
//
// required req.query.category_id
export const delete_category = async (req, res, next) => {
  try {
    await category.delete({ where: { id: JSON.parse(req.query.category_id) } });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required req.query.category_id
export const get_category_products = async (req, res, next) => {
  try {
    const category_and_products = await category.findFirst({
      where: { id: JSON.parse(req.query.category_id) },
      include: { Product: true },
    });
    return res.status(200).json({ category: category_and_products }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required req.query.p = 1/2/3/4/5
export const get_products = async (req, res, next) => {
  try {
    let page;
    let search;
    req.query.p && (page = req.query.p);
    req.query.search && (search = req.query.search);
    let page_count;
    if (page == 1) {
      page_count = await product.count();
    }
    const products = await product.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { Category: { name: { contains: search } } },
        ],
      },
      skip: page && (page - 1) * 12,
      take: page && 12,
      orderBy: {
        name: req.query.order_by && req.query.order_by,
      },
    });
    return res
      .status(200)
      .json({
        products,
        page_count: page && page == 1 ? Math.ceil(page_count / 10) : null,
      })
      .end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//
export const get_product = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const the_product = await product.findUnique({
      where: { id: JSON.parse(product_id) },
      include: { Category: { select: { name: true } } },
    });
    return res.status(200).json({ product: the_product }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//
export const create_product = async (req, res, next) => {
  try {
    const new_product = await product.create({
      data: { ...req.body },
    });
    return res.status(200).json({ product: new_product }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required req.body:{data:updated_data}
export const update_product = async (req, res, next) => {
  try {
    const updated_product = await product.update({
      where: { id: req.body.data.id },
      data: {
        ...req.body.data,
      },
    });
    return res.status(200).json({ updated_product }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//
export const delete_product = async (req, res, next) => {
  try {
    await product.delete({ where: { id: JSON.parse(req.query.id) } });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//
export const create_cart = async (req, res, next) => {
  try {
    const { customer_id } = req.query;
    const { product_id, name, image, price } = req.body;
    const cart_exist = await cart.findFirst({
      where: {
        product_id: JSON.parse(req.body.product_id),
        customer_id: JSON.parse(customer_id),
      },
    });
    if (cart_exist)
      return res.status(300).json({ message: "Cart Already Exist!" }).end();
    const new_cart = await cart.create({
      data: {
        name,
        image,
        price: JSON.parse(price),
        product_id: JSON.parse(product_id),
        customer_id: JSON.parse(customer_id),
      },
    });
    if (!new_cart)
      return res.status(200).json({ message: "Cart didn't added" }).end();
    return res
      .status(200)
      .json({
        message: new_cart ? "Cart Added" : "Cart didn't added",
        cart: new_cart,
      })
      .end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required req.query.customer_id
export const get_carts = async (req, res, next) => {
  try {
    const carts = await cart.findMany({
      where: { customer_id: JSON.parse(req.query.customer_id) },
    });
    return res.status(200).json({ carts }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required req.body:{data:{...data}} and req.query.cart_id
export const update_cart = async (req, res, next) => {
  try {
    const updated_cart = await cart.update({
      where: { id: JSON.parse(req.query.cart_id) },
      data: { ...req.body.data },
      include: { Product: { select: { name: true, image: true } } },
    });
    return res.status(200).json({ cart: updated_cart }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//
export const delete_cart = async (req, res, next) => {
  try {
    await cart.delete({ where: { id: JSON.parse(req.query.cart_id) } });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
export const delete_all_cart = async (req, res, next) => {
  try {
    await cart.deleteMany({
      where: { customer_id: JSON.parse(req.query.customer_id) },
    });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//

//required req.body.data = {product_id_quantity_list_string, price} req.query.customer_id
//
//
export const create_order = async (req, res, next) => {
  try {
    const { cart_list } = req.body.data;
    let order_items = [];
    cart_list.map(async (cart_item) => {
      const new_order = await order.create({
        data: {
          product_id: cart_item.product_id,
          name: cart_item.name,
          image: cart_item.image,
          quantity: cart_item.quantity,
          price: cart_item.price,
          customer_id: JSON.parse(req.query.customer_id),
        },
      });
      order_items.push(new_order);
    });
    await cart.deleteMany({
      where: { customer_id: JSON.parse(req.query.customer_id) },
    });
    await customer.update({
      where: { id: JSON.parse(req.query.customer_id) },
      data: { order_status: "pending..." },
    });
    return res.status(200).json({ order_items }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required req.body.data = {status} req.query.customer_id
export const update_order = async (req, res, next) => {
  try {
    const updated_order = await order.update({
      where: { customer_id: req.query.customer_id },
      data: { status: req.body.status },
    });
    return res.status(200).json({ order: updated_order }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required req.query.customer_id
export const get_customer_order = async (req, res, next) => {
  try {
    const { customer_id } = req.query;
    const customer_order_items = await order.findMany({
      where: { customer_id: JSON.parse(customer_id) },
    });
    return res.status(200).json({ customer_order_items }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//
export const get_all_order = async (req, res, next) => {
  try {
    const orders = await order.findMany();
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//required customer_id
export const delete_order = async (req, res, next) => {
  try {
    await order.delete({
      where: { id: JSON.parse(req.query.order_id) },
    });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const delete_customers_all_order = async (req, res, next) => {
  try {
    await order.deleteMany({
      where: { customer_id: JSON.parse(req.query.customer_id) },
    });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
//
//
//

export const admin_login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin_exist = await admin.findFirst({ where: { email } });
    if (!admin_exist)
      return res.status(404).json({ message: "admin doesn't exist" }).end();
    const password_match = await bcrypt.compare(password, admin_exist.password);
    if (!password_match)
      return res
        .status(404)
        .json({ message: "password did not matched" })
        .end();
    const token = await jsonwebtoken.sign({ name: admin_exist.name, password });
    return res.status(200).json({ token }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
