
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout/Index'
import { BlogData } from '../../lib/Blog'

const styles = {
  blogStyle: {
    fontSize: '12px',
    lineHeight: '25px',
    textAlign: 'justify'
  }
}

function Blog() {
  return (
    <>
      <Layout>
      <Typography variant='h1'> Blogs </Typography>
      <Grid container spacing={2} my={2}>
      {
        BlogData.map((singleBlog, index) => {
          if (index % 2 === 0) {
            return <>
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <Typography variant='h4'>  { singleBlog.title} </Typography>
                  <Typography style={styles.blogStyle}> { singleBlog.desc}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <img src={ singleBlog.image}  alt={singleBlog.title} style={{width:'100%'}}/>
                </Grid> 
              </>
          } else {
            return <>
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <img src={ singleBlog.image}  alt={singleBlog.title} style={{width:'100%'}}/>
                </Grid> 
                <Grid item xs={12} sm={12} md={6}>
                  <Typography variant='h4'>  { singleBlog.title} </Typography>
                  <Typography style={styles.blogStyle}> { singleBlog.desc}</Typography>
                </Grid>     
            </>
          }
        }  
        )
      }
      </Grid>
    </Layout>
  </>
  )
}

export default Blog