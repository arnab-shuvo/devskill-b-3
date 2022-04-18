import axios from 'axios';
export const header=(TOKEN)=>{
axios.interceptors.request.use(
    config=>{
        config.headers.authorization= `bearer ${TOKEN}`;
        return config;
    },
    error=>{
        return Promise.reject(error);
    }
);
}
/*-------------------------------SignIn-----------------------------*/
/*SignUP*/
export const signUP= async(userData)=>{
    try{
        const {data}=await axios.post(
            'http://localhost:8080/signup',
            {
                ...userData,
            }  
            );
        return data;
    }catch (error) {
        console.log(error.message);
    }
}

/*SignIN*/
export const signIN= async(userData)=>{
    try{
        const {data}=await axios.post(
            'http://localhost:8080/signin',
            {
                ...userData,
            }  
            );
        return data;
    }catch (error) {
        console.log(error.message,"apierror");
    }
}