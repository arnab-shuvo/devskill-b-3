import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMethods from "../../utils/api";
import "./updateProduct.css";

const UpdateProduct = () => {
  const { id, index } = useParams();
  const [product, setProduct] = useState(null);
  const { get_product, update_product } = useMethods();
  const onFieldChange = (field_name, value) => {
    setProduct((prev_data) => {
      return {
        ...prev_data,
        [field_name]: value,
      };
    });
  };
  const onUpdateSubmit = async (e) => {
    e.preventDefault();
    update_product(product.id, index, product);
  };

  useEffect(() => {
    const work = async () => {
      try {
        setProduct(await get_product(id));
      } catch (error) {
        return alert(error.message);
      }
    };
    work();
  }, [id]);

  return (
    <>
      {!product ? (
        <h3>Loading....</h3>
      ) : (
        <div className="create-form-container">
          <h3>Update the product!</h3>
          <form onSubmit={onUpdateSubmit}>
            <div>
              <label for="title">Title : </label>
              <input
                name="title"
                type="text"
                value={product.title}
                onChange={(e) => onFieldChange("title", e.target.value)}
              />
            </div>
            <div>
              <label for="price">Price : </label>
              <input
                name="price"
                type="text"
                value={product.price}
                onChange={(e) => onFieldChange("price", e.target.value)}
              />
            </div>

            <div>
              <label for="description">Description : </label>
              <input
                name="description"
                type="text"
                value={product.description}
                onChange={(e) => onFieldChange("description", e.target.value)}
              />
            </div>

            <div>
              <label for="image">Image : </label>
              <div>
                <input
                  name="image"
                  type="file"
                  onChange={(e) => onFieldChange("image", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label for="category">Category : </label>
              <input
                name="category"
                type="text"
                value={product.category}
                onChange={(e) => onFieldChange("category", e.target.value)}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateProduct;
