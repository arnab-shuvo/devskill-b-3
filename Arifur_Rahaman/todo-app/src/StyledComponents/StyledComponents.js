import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
export const TodoPaper = styled(Paper)(({theme})=>({
    width: '30%',
    height: '90%',
    backgroundColor: '#F5F5F5',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '100%'
      }
}))