import React,{useState} from 'react';
import avatar from '../../assets/images/img_avatar2.png';
import { signUP } from '../../utills/api';
import { useNavigate } from 'react-router';
const SignUP=()=>{
    const [inputs, setInputs] = useState([]);
    const navigate=useNavigate();
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
        const signupinfo= await signUP(inputs);
        console.log(signupinfo);
        navigate('/login');
      }
      
    return (
        <>
        <div className='login-form__Container'>
            <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <div className="imgcontainer">
                <img src={avatar} alt="Avatar" className="avatar"/>
            </div>

            <div className="container">
                <label ><b>User name</b></label>
                <input
                type="text" 
                autoComplete="USerName" 
                name="username"
                value={inputs.username || ""} 
                onChange={handleChange}
                />
                <label ><b>email</b></label>
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
               

                <label ><b>Phone No</b></label>
                <input
                type="text" 
                autoComplete="PhoneNo" 
                name="number"
                value={inputs.number || ""} 
                onChange={handleChange}
                />
        
                <button type="submit">Sign Up</button>
            </div>
            </form>
        </div>
    </div>
        </>
    );
}
export default SignUP;