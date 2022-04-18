import "../../../App.css";
import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"; 
import { loadCategories } from '../../../store/action/CategoryAction';
import FrontLayout from "../../../Layouts/FrontEnd/FrontLayout";

const Category = () => {
  const dispatch = useDispatch();
  // Destructuring "categoryList" from CategoryReducer
  const { categoryList } = useSelector((state) => state.prodCategories); // prodCategories is comming from RootReducer (prodCategories:CategoryReducer,)

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h2>Product Categories from API</h2>
      <Button variant="contained" color="primary" sx={{ height: 60, mt: 10, }}>
        <Link to={"/"}>Back to Home </Link>
      </Button>

      <ButtonGroup disableElevation variant="outlined" size="small" >
        {categoryList.map((row) =>(
            <Button color='secondary'><Link className="nav-link" to={`/product-category/${row._id}`}>{row.name}</Link></Button>    
        ))}
      </ButtonGroup>
    </div>
  );
};

export default FrontLayout(Category)
