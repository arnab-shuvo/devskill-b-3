import '../category/style.css';
import {getUserLists,deleteUserAPI} from '../../../utills/userapi';
import {useState,useEffect} from 'react';
const User=({token})=>{
    const [userList,setUserList]=useState([]);
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
    }, [])
    const editUser=(userID)=>{

    }
    const deleteUser=async(userID)=>{
        try {
            await deleteUserAPI(userID,token);
            alert("Category Deleted Succesfully");
            
        } catch (error) {
            return alert(error.message);
        }
    }
return(
     <>
    <section>
    <div className='admin_category'>
    <h3>User List...</h3>
    <button className='admin_category__button'>Create New User</button>
    <div>
        {userList.map((list)=>{
            return(
                <>  
                <div className='admin_category__list'>
                <h3>Email: {list.email}</h3>
                <h3>Role: {list.role}</h3>
                <h3>UserName: {list.username}</h3>
                <div className='admin_category__list--button'>
                    <button onClick={()=>editUser(list._id)}>Edit User</button>
                    <button onClick={()=>deleteUser(list._id)}>Delete User</button>
                </div>
                </div>
                </>
                ); 
        })}
    </div>
    </div>
    </section>
    </>
    );
}
export default User;