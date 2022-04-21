import {useEffect,useState} from 'react';
import { getProducts, createProduct } from '../../../utills/productapi';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import { FormPopUp } from '../../../styles/popup.styled';
import ProductForm from './form';

const Product=({token})=>{

    const [products,setProducts]=useState();
    const[formState,setFormState]=useState('none');
    const [submitState,setSubmitState]=useState(0);
    const [inputs, setInputs] = useState({});
    const [categoryId,setCategoryId]=useState();

    useEffect(()=>{
        const work= async()=>{
           setProducts(await getProducts());
           console.log(products);
        }
        work();
    }, [submitState]);

    const editProfile=(value)=>{
        setFormState(value);
    }

    const getCategoryId=(value)=>{
        setCategoryId(value);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => {
            return{
                ...values,
                 [name]: value,
                 category: {
                     _id: categoryId
                 }
                };
            }   
        );
      }
console.log(inputs,"inputs");

    const onUpdateSubmit= async(e)=>{ 
        e.preventDefault(); 
        console.log("inside updatesubmit");
        const update= await createProduct(inputs,token);
        console.log(update,"update");
        setSubmitState(submitState+1);
    };
    console.log(formState,"formstate");

    return(
        <>
        <h2>Hi i am product</h2>
        <Button onClick={()=>editProfile('block')}>Add new Product</Button>
        <TableContainer component={Paper} >
              <Table aria-label='Cart'>
                <TableHead>
                  <TableRow>
                      <TableCell>Index</TableCell>
                      <TableCell>image</TableCell>
                      <TableCell>title</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Stock</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {products?.map((product,index)=>{
                    return(
                        <>
                        <TableRow key={index}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell></TableCell>
                            <TableCell>{product?.title}</TableCell>
                            <TableCell>{product?.category?.name}</TableCell>
                            <TableCell>{product?.stock}</TableCell>
                            <TableCell>{product?.price}</TableCell>
                            <TableCell><Button>Edit</Button></TableCell>
                            <TableCell><Button>Delete</Button></TableCell>
                        </TableRow>
                        </>
                    );
                     })}
                </TableBody>
                </Table>
                </TableContainer>
                <FormPopUp display={formState}>
                     <ProductForm
                     handleChange={handleChange}
                     onUpdateSubmit={onUpdateSubmit}
                     editProfile={editProfile}
                     inputs={inputs}
                     getCategoryId={getCategoryId}
                     />
                </FormPopUp >
        </>
    );
}
export default Product;