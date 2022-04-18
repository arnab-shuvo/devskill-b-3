
import './style.css';
const SecondaryHeader=({user})=>{
    return(
        <>
            <header className='admin-header'>
                    <div className='green'></div>
                    <div className='blue'></div>
                    <div className='red'></div>
                    <div className='user'><h2 className='user_h2'>{user}</h2></div>
            </header>
        </>
    );
}
export default SecondaryHeader;