import { IconButton, List, ListItemIcon, ListItemText } from '@material-ui/core'
import { Drawer, ListItemButton } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComponent() {
    const [open, setOpen]= useState(false); 
  return (
    <React.Fragment>
        <Drawer open={open} onClose={()=>setOpen(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>
                            React eCom
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={()=>setOpen(!open)}>
            <MenuIcon></MenuIcon>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComponent