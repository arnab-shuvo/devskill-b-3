import './Footer.css';
const Footer=()=>{
    return(
        <>
        <div className='footer'>
        <div>
            <div className='footerA'>
                <div >
                    <h2>Company info</h2>
                    <ul>
                        <li> About Laura's Closet</li>
                        <li>Social Responsibility</li>
                        <li>Affiliate</li>
                        <li>Fashion Blogger</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h2>Help Support</h2></li>
                        <li>Shipping Info</li>
                        <li>Returns</li>
                        <li>How to order</li>
                        <li>How to Track</li>
                        <li>Size Chart</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h2>Customer Care</h2></li>
                        <li>Contact Us</li>
                        <li>Payment</li>
                        <li>Bonus Point</li>
                        <li>Notices</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>2022-2032 all right reserved to Site</h3>
                <button>Privacy Center</button>
                <button>Privacy and Cookie Policy</button>
                <button>Manage Cookies</button>
                <button>Terms and Condition</button>
                <button>Copyright Notice</button>
                <button>Imprint</button>
            </div>
        </div>
            <div>
                <div className='socials'>
                    <h2>Socials</h2>
                </div>
                <div className='platforms'>
                    <h2>Platforms</h2>
                </div>
                <div className='subcribe'>
                    <h3>SIGN UP LAURA'S CLOSET STYLE NEWS</h3>
                    <input type="text"/>
                    <button>SUBCRIBE</button>
                    <h3>By Clicking the SUBCRIBE button,you are agreeing to our Privacy and Cookie Policy</h3>
                </div>
                <div className='card'>
                        <h3>We Accept</h3>
                </div>
            </div>
        </div>
        </>
    );
}
export default Footer;