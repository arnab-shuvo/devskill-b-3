import axios from 'axios';
import {header} from './api';
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
/*Delete User
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