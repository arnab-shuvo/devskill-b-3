import axios from 'axios';
import {header} from './api';

/*Admin*/

/*GetALLUserList
Dependency Require Admin Authentication*/
export const getUserLists= async (TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.get('http://localhost:8080/user/',
        );
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}
/*Get User By Id
Dependency Require Admin Authentication*/
export const getUser= async (userId,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.get(`http://localhost:8080/user/${userId}`,
        );
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}
/*Add User by Admin
Dependency Require Admin Authentication
*/
export const addUserAPI= async(userData,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.post(
            'http://localhost:8080/user',
                {
                    ...userData,     
                }  
            );
        return console.log(data);
    }catch (error) {
        return alert(error.message);
    }
        
}

/*Update User by ID
Dependency Require Admin Authentication
*/
export const updateUserAPI= async(userId,userData,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.patch(
            `http://localhost:8080/user/${userId}`,
                {
                    ...userData,     
                }  
            );
        return console.log(data);
    }catch (error) {
        return alert(error.message);
    }
        
}
/*Delete User by ID
Dependency Require Admin Authentication
*/
export const deleteUserAPI= async(userId,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.delete(
            `http://localhost:8080/user/${userId}`,
            );
        return console.log(data);
    }catch (error) {
        return alert(error.message);
    }
        
}
/*User*/

/*Get My Information
Dependency Require Authentication
*/
export const getMyInfo= async (TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.get('http://localhost:8080/my-detail/',
        );
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}

/*Edit My Information
Dependency Require Authentication
*/
export const updateMyInfoAPI= async(userData,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.patch(
            'http://localhost:8080/my-detail/',
                {
                    ...userData,     
                }  
            );
        return console.log(data);
    }catch (error) {
        return alert(error.message);
    }
        
}