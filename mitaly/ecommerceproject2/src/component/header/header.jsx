
import './header.css';

const Header=()=>{
    
return (
    <>
        <div className="topnav">
        <a className="active" href="#home">NFTERS</a>
        <a href="#about">Marketplace</a>
        <a href="#contact">Resource</a>
        <a href="#contact">About</a>
        <div className="search-container">
            
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i className="fa-search"></i></button>
            <button className='scb_2'>Connect Wallet</button>
            <button className='scb_1'>Upload</button>
            
        </div>
        
            
        </div>
    </>
);
}
export default Header;