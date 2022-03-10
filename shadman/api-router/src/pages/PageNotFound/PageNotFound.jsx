import React from 'react'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'

const styles = {
    container :{
        display: "flex",
        flexDirection: 'column', 
        justifyContent: "center",
        alignItems: "center"
    },

    heading :{
        fontSize: "100px"
    }

}

const PageNotFound = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div style = {styles.container}>
            <h1 style={styles.heading}>404 Not Found</h1>
            <h1>THE PAGE YOU REQUESTED COULD NOT BE FOUND</h1>
            <Button variant='outlined' onClick = {handleClick} sx={{ color: "black", display: "block", border: "2px black solid" }}>
                Go To Home Page
            </Button>
        </div>
    )
}

export default PageNotFound