import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

function ProductList(props) {
  return (
      <List {...props}>
          <Datagrid>
            <TextField source='id' />
            <TextField source='title' />
            <TextField source='price' />
          </Datagrid>
    </List>
  )
}

export default ProductList