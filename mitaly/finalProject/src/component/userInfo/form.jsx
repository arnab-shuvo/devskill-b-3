const UserForm=({handleChange,onUpdateSubmit,editProfile,inputs})=>{
    return(
    <>
        <form onSubmit={onUpdateSubmit} className='form-container'>
            <h1>Login</h1>

            <label for="email"><b>Email</b></label>
            <input type="text" 
             placeholder="Enter Email" 
             name="email" 
             value={inputs.email || ""} 
             onChange={handleChange}/>

            <label for="username"><b>Username</b></label>
            <input type="text" 
             placeholder="Enter Username" 
             name="username" 
             value={inputs.username || ""} 
             onChange={handleChange}/>

            <label for="phoneNo"><b>Phon No</b></label>
            <input type="text" 
             placeholder="Enter Phone No" 
             name="phone" 
             value={inputs.phone || ""} 
             onChange={handleChange}/>

            <label for="password"><b>Password</b></label>
            <input type="password" 
             placeholder="Enter Password" 
             name="password" 
             value={inputs.password || ""} 
             onChange={handleChange}/>

            <button type='submit'>Edit</button>
            <button type='button' onClick={()=>editProfile('none')}>close Profile</button>
            </form>
    </>
    );
}
export default UserForm;