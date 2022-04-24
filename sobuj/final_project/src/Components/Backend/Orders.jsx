import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useSelector } from 'react-redux';
import { green } from '@material-ui/core/colors';
import { useEffect } from 'react';
import { loadAllOrderAdmin } from '../../store/action/OrderAction';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import OrderDetail from './OrderDetail';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button } from '@material-ui/core';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {

  const loggedInUser = useSelector((store) =>store.userStore);
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const { manageOrders } = useSelector((state) => state.manageOrders); 
  console.log(manageOrders, "===== manage orders from dhashboard")
  const getTotalPrice = (index) => {
    let totalPrice = 0;
    manageOrders[index].products?.map((orderData) => (totalPrice += orderData.productId['price']));
    return totalPrice;
  };
  useEffect(() => {
    if(loggedInUser.isAuthUser === true){
        dispatch(loadAllOrderAdmin(loggedInUser.token.userInfo.token));
    }else{
      alert('please login first');
      navigate('/login');
    }
  }, []);

  const toManageOrder = () =>{
      navigate('/admin/manage-orders');
  }
  const toViewOrder = (id) =>{
    navigate(`/admin/order-details/${id}`)
  }
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow style={{ fontWeight:"bold" }}>
            <TableCell>Date</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Qty.</TableCell>
            <TableCell>Sale Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {manageOrders.map((dataRow, index) => (
            <TableRow key={dataRow._id}>
              <TableCell>{dataRow.date}</TableCell>
              <TableCell>{dataRow._id}</TableCell>
              <TableCell>{dataRow.userId.firstname + ' ' + dataRow.userId.lastname}</TableCell>
              <TableCell>{dataRow.products.length}</TableCell>
              <TableCell>{`$${getTotalPrice(index)}`}</TableCell>
              <TableCell align="right">
                  {dataRow.status === 0 ? (
                      <h6 class="" style={{ background:"transparent", color:"#114e80", border:"1px solid #114e80", borderRadius:"5px", padding:"5px"}}>
                        Pending
                      </h6>
                    ) : (
                      <h6 class="" style={{ background:"transparent", color:"Green", border:"1px solid green", borderRadius:"5px", padding:"5px" }}>
                        Order Placed
                      </h6>
                    )}
              </TableCell>
              <TableCell>
                {/* popup order detail info */}
                {/* <OrderDetail /> */}
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  onClick={() => toViewOrder(dataRow._id, )}
                >
                  <RemoveRedEyeIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}