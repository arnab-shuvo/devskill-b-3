import { Button, ButtonGroup, Card, CardContent, CardMedia, Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Loader from './Loader';

const styles = {
    img: {
        width: '100%',
        height: '200px',
        backgroundSize: 'cover',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cardHeight: {
        height: '30vw'
    },
    marginHorizontal : {
        marginTop: '10px',
        marginBottom: '50px',
    },
    buttonColor: {
        color: '#fff',
        backgroundColor: '#000000'
    },
}

function Products() {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const [productDetail, setProductDetails] = useState('')
    const [showProduct, setShowProduct] = useState(true)
    const [order, setOrder] = useState('desc')
    const [category, setcategory] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [inputProduct, setInputProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category:''
    })
    

    useEffect(() => {
        setLoader(true)
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
        
            setLoader(false)
    }, []);



    const getProductId = (id) => {
        setShowProduct(false)
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then( (res)=> res.json() )
        .then( (data)=> setProductDetails(data) )
    }

    const backToHome = () => {
        setShowProduct(true)
  }

    const searchFilter = (text)=> {
        const typed = text.target.value
        if (typed) {
            const filteredData = products.filter( (item)=> {
                const userTypedData = text.target.value.toLowerCase();
                const itemData = item.title.toLowerCase()
                return itemData.indexOf(userTypedData) > -1;
            })
            setProducts(filteredData)
        } else {
            fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then( (data)=> setProducts(data))
        }
    }
    const ascDes = [
        {
            label: 'ASC',
            value: 'asc'
        },
        {
            label: 'DESC',
            value: 'desc'
        },
    ]
    const categories = [
        {
            label: `Women's Clothing`,
            value: `women's clothing`,
        },
        {
            label: `Men's Clothing`,
            value: `men's clothing`,
        },
        {
            label: `Jewelery`,
            value: `jewelery`,
        },
        {
            label: `Electronics`,
            value: `electronics`,
        },
    ]
    const changeOrder = (e) => {
        const newOrder = e.target.value
        setOrder(newOrder)
        fetch(`https://fakestoreapi.com/products?sort=${newOrder}`)
        .then( (res)=> res.json() )
        .then( (data)=> setProducts(data) )   
    }
	
    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setcategory(newCategory)

        fetch(`https://fakestoreapi.com/products/category/${newCategory}`)
        .then( (res)=> res.json())
        .then( (data)=> setProducts(data) )
        console.log(category);
    }
    const clickToOpenModal = () => {
        console.log('ckliced')
        setModalIsOpen(true)
    }


    const handelingInputsEvent = (e) => {
        const { name, value } = e.target  
        setInputProduct({
            ...inputProduct,
            [name] : value
        })

    }
	
    console.log(inputProduct)

    const sybmitProduct = (e) => {
        e.preventDefault();
        
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(inputProduct)
        })
            .then(res=>res.json())
            .then(json => console.log(json))
            setModalIsOpen(false)
        
    }

    const deleteProduct = (id) => {
        const newId = id;
        fetch(`https://fakestoreapi.com/products/${newId}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
	
   return (
       <>   
           <Grid container spacing={2}>
               <Grid item  xs={4}>
                   <TextField
                       label='Search'
                       fullWidth
                       onChange={ (text)=> searchFilter(text)}
                   />
               </Grid>
               <Grid item xs={4}>
                    <TextField
                       select
                       label='Order'
                       helperText='Please Select'
                       fullWidth
                       value={order}
                       onChange={changeOrder}
					   
                   >
                        {
                           ascDes.map((option) => 
                               <MenuItem key={option.label} value={option.value}> { option.label } </MenuItem>
                           )
                        }
                       
                    </TextField>
               </Grid>
               <Grid item xs={4}>
                   <TextField
                       select
                       fullWidth
                       label='Category'
                       helperText='Please select a category'
                       value={category}
                       onChange={handleCategoryChange}
                   >
                       {
                           categories.map((category) =>
                               <MenuItem key={category.label} value={category.value}> { category.label} </MenuItem>
                           )
                       }
                    </TextField>
               </Grid>
           </Grid>
           {/* products view   */}

           <Grid container justifyContent='flex-end'>
               <Grid item >
                   <Button onClick={clickToOpenModal} style={ styles.buttonColor} variant='contained'> Add Product </Button>
               </Grid>
           </Grid>
           <Grid container justifyContent='center'>
               <Grid item xs={12}>
                   <Typography> Add new Product </Typography>
                   <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                       <Grid container>
                           <Grid item sx={ 12} sm={12} md={12} lg={12}>
                            <TextField
                                fullWidth
                                label='Title'
                                name='title'
                                helperText='Please add Title'
                                required
                                onChange={handelingInputsEvent }
                            />
                           </Grid>
                           <Grid item sx={ 12} sm={12} md={12} lg={12}>
                            <TextField
                                   fullWidth
                                   label='Price'
                                   name='price'
                                   helperText='Please add price'
                                   required
                                   onChange={handelingInputsEvent }
                                />
                           </Grid>
                           <Grid item sx={ 12} sm={12} md={12} lg={12}>
                            <TextField
                                    fullWidth
                                   label='description'
                                   name='description'
                                    helperText='Please add description'
                                   required
                                   onChange={handelingInputsEvent }
                                />
                           </Grid>
                           <Grid item sx={ 12} sm={12} md={12} lg={12}>
                            <TextField
                                    fullWidth
                                   label='image'
                                   name='image'
                                    helperText='Please put URL right now'
                                   required
                                   onChange={handelingInputsEvent }
                                />
                           </Grid>
                           <Grid item sx={ 12} sm={12} md={12} lg={12}>
                            <TextField
                                    select
                                    fullWidth
                                   label='Category'
                                   name='category'
                                    helperText='Please select a category'
                                    value={category}
                                    onChange={handelingInputsEvent }
                                >
                                {
                                    categories.map((category) =>
                                <MenuItem key={category.label} value={category.value}> { category.label} </MenuItem>
                                    )
                                    }
                                </TextField>
                           </Grid>
                           <Grid item sx={6} sm={6} md={6} lg={6}>
                            <Button onClick={ sybmitProduct }> Submit </Button>
                           </Grid>
                           <Grid item sx={6} sm={6} md={6} lg={6}>
                            <Button onClick={() => setModalIsOpen(false)}> Close </Button>
                           </Grid>

                        </Grid> 
                       
                   </Modal>
               </Grid>
           </Grid>
           {
               loader ? <Loader /> :
               <>
               {
                showProduct ?
                <Grid container spacing={2} style={styles.marginHorizontal}>
                {
                    products.map((product, index) => {
                        return (
                 <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                     <Card style={styles.cardHeight}>
                         <CardMedia
                             component='img'
                             height='100%'
                             image={product.image}
                             style={styles.img}
                         />
                         <CardContent>
                         <Typography variant='h6' noWrap> {product.title} </Typography>
                         <Typography variant='subtitle1'> Price : { product.price }$</Typography>
                         <Typography variant='subtitle1'> Category : { product.category } </Typography>
                            <ButtonGroup>
                                 <Button
                                    variant='contained'
                                    onClick={()=>getProductId(product.id) }
                                > Details {product.id }
                         </Button>
                         <Button
                             variant='contained'
                             onClick={()=>deleteProduct(product.id) }
                        > Delete {product.id }
                         </Button>
                         </ButtonGroup>
                         </CardContent>
                    </Card>
                 </Grid>
                       )
                   })
               }
                    </Grid> : 
                 //    view details
                    <Grid container >
                     <Grid item xs={12} sm={12} md={12} lg={12}>
                         <Card>
                             <CardMedia
                                 component='img'
                                 height='100%'
                                 image={productDetail.image}
                                 style={styles.img}
                             />
                             <CardContent>
                             <Typography variant='h5' noWrap> {productDetail.title} </Typography>
                             <Typography variant='body1' noWrap> {productDetail?.description} </Typography>
                             <Typography variant='h6' noWrap> {productDetail?.category} </Typography>
                             <Typography variant='subtitle1'> Price : { productDetail.price}$</Typography>
                             <Typography variant='subtitle1'> Rating : { productDetail.rating?.rate}</Typography>
                             <Typography variant='subtitle1'> Count : { productDetail.rating?.count}</Typography>
                            
                             <Button
                                variant='contained'
                                onClick={backToHome}  
                             > Back to Home
                             </Button>
                             </CardContent>
                        </Card>
                     </Grid>    
                 </Grid>
                       } 
              </>          
           }             
       </>
  )
}

export default Products