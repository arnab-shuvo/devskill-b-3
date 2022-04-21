import '../category/style.css';
import {getUserLists,deleteUserAPI,updateUserAPI,addUserAPI} from '../../../utills/userapi';
import {useState,useEffect} from 'react';
import {FormPopUp} from '../../../styles/popup.styled';
import UserForm from '../../userInfo/form';
const User=({token})=>{
    const [userList,setUserList]=useState([]);
    const[formState,setFormState]=useState('none');
    const [submitState,setSubmitState]=useState(0);
    const [inputs, setInputs] = useState({});
    const [userId,setUserId]=useState();
    const [option,setOption]=useState();

    useEffect(() => {
        const work= async()=>{
            try {
                setUserList(await getUserLists(token)); 
                console.log(userList);   
            } catch (error) {
                return alert(error.message);
            }
        }
        work();
    }, [submitState])

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
        if(option === 'edit'){
        const update= await updateUserAPI(userId,inputs,token);
        console.log(update,"update");
        setSubmitState(submitState+1);}
        else if(option === 'create'){
            const update= await addUserAPI(inputs,token);
            console.log(update,"update");
            setSubmitState(submitState+1);
        }
    };
    console.log(formState,"formstate");

    const editUser=(Id,valueA,valueB)=>{
        setOption(valueA);
        formDisplay(valueB);
        setUserId(Id);
    }

    const deleteUser=async(userID)=>{

            await deleteUserAPI(userID,token);
            alert("Category Deleted Succesfully");
    }
    const formDisplay=(value)=>{
        setFormState(value);
    }
    const createUser=(valueA,valueB)=>{
        setOption(valueA);
        formDisplay(valueB);
    }
return(
     <>
    <section>
    <div className='admin_category'>
    <h3>User List...</h3>
    <button onClick={()=>createUser('create','block')} className='admin_category__button'>Create New User</button>
    <div>
        {userList.map((list)=>{
            return(
                <>  
                <div className='admin_category__list'>
                <h3>Email: {list.email}</h3>
                <h3>Role: {list.role}</h3>
                <h3>UserName: {list.username}</h3>
                <div className='admin_category__list--button'>
                    <button onClick={()=>editUser(list._id,'edit','block')}>Edit User</button>
                    <button onClick={()=>deleteUser(list._id)}>Delete User</button>
                </div>
                </div>
                </>
                ); 
        })}
    </div>
    </div>
        <FormPopUp display={formState}>
            <UserForm 
            handleChange={handleChange}
            onUpdateSubmit={onUpdateSubmit}
            editProfile={formDisplay}
            inputs={inputs}
            />
        </FormPopUp>
    </section>
    </>
    );
}
export default User;