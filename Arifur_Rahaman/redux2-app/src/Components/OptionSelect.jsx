import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux'
import {setProductCategory} from '../Redux/actions/productAction'

export default function OptionSelect({options, title}) {
  const dispatch = useDispatch();
  const {product} = useSelector(store=>store.category)
  const handleChange = (event) => {
    dispatch(setProductCategory(event.target.value));
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product}
          label= {title}
          onChange={handleChange}
        >
          {
            options.map((option, i)=>(
              <MenuItem value={option} key={i}>{option}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}
