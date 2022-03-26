import React, { useState, useEffect } from 'react'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Container } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from 'react-redux';
import {setproductList} from "../../redux/action/productAction"

const styles = {
    productHeader: {
        marginTop: '100px',
    },

    header: {
        textAlign: 'center'
    }

}

const Products = () => {
    
    const { products } = useSelector(store=>store.products)

    const dispatch = useDispatch()

    const data = [...products]
    let filter = [...products]
    
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [value, setValue] = useState("");

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            dispatch(setproductList(await response.clone().json()))
            setLoading(false)
            

        }
        const getCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            setCategories(await response.json())


        }

        getCategories()
        getProducts()

    },[dispatch])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const filterProduct = (cat) => {
        filter = data.filter(x => x.category === cat)
        dispatch(setproductList(filter))
    }

    const handleSort = async (value) => {
        const checkValue = (value === "Ascending") ? "asc" : "desc"
        
        await fetch(`https://fakestoreapi.com/products?sort=${checkValue}`)
            .then(res => res.json())
            .then(json => dispatch(setproductList(json)))

    }

    const Loading = () => {
        return <>

            <Grid container justifyContent={"center"} spacing={1} >
                <Grid md={3} item >
                    <Skeleton variant="rectangular" width={250} height={300} />
                </Grid>
                <Grid md={3} item >
                    <Skeleton variant="rectangular" width={250} height={300} />
                </Grid>
                <Grid md={3} item >
                    <Skeleton variant="rectangular" width={250} height={300} />
                </Grid>
                <Grid md={3} item>
                    <Skeleton variant="rectangular" width={250} height={300} />
                </Grid>
            </Grid>


        </>
    }

    const ShowProducts = () => {
        return <>
            <Container>
                <Grid container justifyContent={"center"} sx={{ py: 4 }} spacing={2}>
                    <Grid item md={10}>
                        <Box sx={{ display: { xs: "none", md: "flex" } }} spacing={2}>
                            <Button onClick = {()=>{dispatch(setproductList(products))}} variant='outlined' sx={{ ml: 4, mr: 1, color: "black", display: "block", border: "2px black solid" }}>
                                All Products
                            </Button>
                            {
                                categories.map((category, index) => {
                                    return <Button onClick={() => filterProduct(category)} variant='outlined' sx={{ ml: 4, mr: 1, color: "black", display: "block", border: "2px black solid" }}>
                                        {category}
                                    </Button>
                                })
                            }

                        </Box>
                    </Grid>
                    <Grid item md={2}>
                        <Box sx={{ display: { xs: "none", md: "flex" } }} spacing={2}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    label="Categories"
                                    onChange={handleChange}
                                >
                                <MenuItem value={10} onClick={()=>handleSort("Ascending")}>Ascending</MenuItem>
                                <MenuItem value={20} onClick={()=>handleSort("Descending")}>Descending</MenuItem>


                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container justifyContent={"center"}  >
                    <Grid item container md={12} spacing={3}>
                        {data.map((product) => {
                            return (
                                <Grid md={3} item >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    {product.title[0]}
                                                </Avatar>
                                            }

                                            title={`${product.title.slice(0, 15)}.....`}
                                            subheader={`$${product.price}`}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={product.image}
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.description.substr(0, 50)}.....
                                            </Typography>
                                        </CardContent>
                                        <CardActions >
                                            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', margin: 'auto' }}>
                                                <Button variant='outlined' sx={{ color: "black", display: "block", border: "2px black solid" }}>
                                                    View Details
                                                </Button>
                                            </Link>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>

        </>
    }

    return (
        <div className='product-list' style={styles.productHeader}>
            <Container>
                <Typography variant="h2" style={styles.header}>
                    Latest Products
                </Typography>
                <hr />
                {
                    loading ? <Loading /> : <ShowProducts />
                }

            </Container >
        </div>
    )
}

export default Products