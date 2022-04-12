import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from "@mui/material/Box";
import sample from "../../assets/sample.jpg"
import Products from '../../components/Products/Products';

const styles = {

    card: {
        margin: 'auto',
        width: '85%',
        height: 'auto'
    }
}

const Home = () => {
    return (
        <div>
            <Card style={styles.card}>
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            image={sample}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 0,
                                width: '100%',
                                color: 'white',
                                padding: '10px',
                            }}
                        >
                            <Typography variant="h2">NEW COLLECTIONS</Typography>
                            <Typography variant="h5">CHECK OUT ALL THE PRODUCTS</Typography>
                        </Box>
                    </Box>
                </Card>
                <Products/>                             
        </div>
    )
}

export default Home