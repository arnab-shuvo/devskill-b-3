import cogoToast from "cogo-toast";

import { useEffect, useState } from "react";
import { get_categories } from "../../../store/thunks/owner_thunk";
import "./owner_category_page_styles.css";
const OwnerCategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const category_got = await get_categories();
      category_got
        ? setCategories(category_got)
        : cogoToast.warn("cant get categories");
    };
    execute();
  }, []);

  return (
    <div className="owner-category-container">
      <h1>Categories We Have</h1>
      {categories.length == 0 ? (
        <h1>Loading ... </h1>
      ) : (
        <div className="category-list">
          {categories.map((category) => (
            <div className="category-item">
              <img src={category.image} alt={category.name} />
              <h3>Category : {category.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OwnerCategoryPage;
