import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';


const Dropdown = ({ setProductList }) => {
    const [value, setValue] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((json) => {
                setCategories(json);
            });
    }, []);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = async (category) => {
        const api = `https://fakestoreapi.com/products/category/${category}`
        const result = await fetch(api)
        const getResult = await result.json()
        setProductList(getResult)
    };

    const handleSort = (boolean) => {
        if (boolean===true) {
            fetch('https://fakestoreapi.com/products?sort=asc')
                .then(res => res.json())
                .then(json => setProductList(json))
        }
        else {
            fetch('https://fakestoreapi.com/products?sort=desc')
                .then(res => res.json())
                .then(json => setProductList(json))
        }
    }

    const handleAll = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProductList(json))
    }

    const addNew = () => {
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    label="Categories"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={5} onClick={handleAll}>All Products</MenuItem>
                                    {categories?.map((category, index) => {
                                        return (
                                            <MenuItem onClick={() => handleClick(category)} value={index}>{category}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    label="Categories"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10} onClick={()=>handleSort(true)}>Ascending</MenuItem>
                                    <MenuItem value={20} onClick={()=>handleSort(false)}>Descending</MenuItem>


                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item md={6}></Grid>
                    <Grid item md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <Button onClick = {addNew} variant="contained">Add New Item</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
    };

    export default Dropdown;
