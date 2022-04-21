import {useEffect,useState} from 'react';
import { getMyInfo, updateMyInfoAPI } from '../../utills/userapi';
import { FormPopUp } from '../../styles/popup.styled';
import './style.css';
import UserForm from './form';
const UserInfo=({token})=>{
    const [info,setInfo]=useState();
    const[formState,setFormState]=useState('none');
    const [submitState,setSubmitState]=useState(0);
    const [inputs, setInputs] = useState({});
    useEffect(() => {
       const work=async()=>{
            setInfo(await getMyInfo(token));
            console.log(info);
       }
       work();
    }, [submitState])

    const editProfile=(value)=>{
        setFormState(value);
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

    const onUpdateSubmit= async(e)=>{ 
        e.preventDefault(); 
        const update= await updateMyInfoAPI(inputs,token);
        console.log(update,"update");
        setSubmitState(submitState+1);
    };
    console.log(formState,"formstate");
    return(
        <>
        <h2>Name: {info?.username}</h2>
        <h2>Email: {info?.email}</h2>
        <h2>Phone: {info?.phone}</h2>
        <h2>Address: {info?.address?.street},{info?.address?.city}</h2>
        <button onClick={()=>editProfile('block')}>Edit Profile</button>
        <FormPopUp display={formState}>
            <UserForm 
            handleChange={handleChange}
            onUpdateSubmit={onUpdateSubmit}
            editProfile={editProfile}
            inputs={inputs}
            />
        </FormPopUp>
        </>
    );
}
export default UserInfo;