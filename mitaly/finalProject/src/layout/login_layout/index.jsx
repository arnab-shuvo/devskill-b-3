import {useNavigate} from 'react-router-dom';
import avatar from '../../assets/images/img_avatar2.png';
import {signIN} from '../../utills/api';
import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import './login.css';
const Login=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [inputs, setInputs] = useState([]);

   const userInfoFunction=(userinfo)=>{
       console.log(userinfo,"insdie dispatch function");
        dispatch({
            type: "setUserInfo",
            payload: userinfo,
        })
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => {
            return{
                ...values,
                 [name]: value
                };
            }
        );
      }

      const handleSubmit =  async(e) => {
        e.preventDefault();
        const user_Info=await signIN(inputs);
        console.log(user_Info,"user_Info");
        userInfoFunction(user_Info.userInfo);
        if(user_Info.message === "Logged in Successfully"){
            navigate('/AdminDashboard');
        } 
      }
     
return(
    <>
    {!inputs ? (
        <h3>Loading....</h3>
      ) : (
    <div className='login-form__Container'>
    <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
    <div className="imgcontainer">
    <img src={avatar} alt="Avatar" className="avatar"/>
    </div>

    <div className="container">
    <label ><b>Username</b></label>
    <input
     type="text" 
     autoComplete="email" 
     name="email"
     value={inputs.email || ""} 
     onChange={handleChange}
      />

    <label><b>Password</b></label>
    <input 
    type="password" 
    autoComplete="current-password" 
    name="password"
    value={inputs.password || ""} 
     onChange={handleChange}
    />
        
    <button type="submit">Log IN</button>
    </div>
    <div className="container" >
    <h4>Do not have account <button onClick={()=>navigate('/signUP')}>Sign UP</button></h4>
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
    </form>
    </div>
    </div>
    )}
 </>
);
}
export default Login;