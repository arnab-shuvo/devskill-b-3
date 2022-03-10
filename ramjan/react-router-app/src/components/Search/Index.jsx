import { Grid, TextField } from '@mui/material';
import React from 'react';

function SearchFilter({searchFilter }) {
  return (
    <Grid item xs={4} sm={4} md={ 4 }>
          <TextField
            label='Search'
            onChange={(text) => searchFilter(text)}
          />
        </Grid>
  )
}

export default SearchFilter