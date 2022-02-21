import { Button, CardActions, CardContent, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react'



function TaskCard(props, {deleteTask, editRow}) {
  
  return (
          <Grid xs={6} container spacing={2}>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell>Task Name</TableCell>
                <TableCell align="right">Action</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.tasks.map((row) => (
                <TableRow
                  key={row}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  <TableCell align="right">
                  <Button size="small" onClick={() => props.editRow(row)} >Edit</Button>
                  </TableCell>
                  <TableCell align="right">
                  <Button size="small" onClick={() => props.deleteTask(row)} >Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </Grid>
  );
}

export default TaskCard;