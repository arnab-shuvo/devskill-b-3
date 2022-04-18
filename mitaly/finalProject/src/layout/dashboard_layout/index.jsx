import './dashboard.css';
import cv from '../../assets/images/14.png';
import cv1 from '../../assets/images/8.png';
import cv2 from '../../assets/images/10.png';
import cv3 from '../../assets/images/5.png';
import cv4 from '../../assets/images/5.png';
import cv5 from '../../assets/images/13.png';
import cv6 from '../../assets/images/9.png';
import cv7 from '../../assets/images/1.png';
import cv8 from '../../assets/images/17.png';
import cv9 from '../../assets/images/18.png';
import cv10 from '../../assets/images/19.png';
import cv11 from '../../assets/images/20.png';
import cv12 from '../../assets/images/21.png';
import cv13 from '../../assets/images/3.png';
import cv14 from '../../assets/images/16.png';
import cv15 from '../../assets/images/2.png';
import cv16 from '../../assets/images/12.png';
import cv17 from '../../assets/images/7.png';
import cv18 from '../../assets/images/15.png';
import cv19 from '../../assets/images/22.png';
import cv20 from '../../assets/images/23.png';
import cv21 from '../../assets/images/24.png';

const Dashboard=()=>{
return(
    <>
    <div className='body-dashboard__container'>
    <div className='body-dashboard'>
    <header className='main-header'>
       
            <div className='green'></div>
            <div className='blue'></div>
            <div className='red'></div>
        
    </header>
    <main>
    <section className='side-nav-bar' >
    <div className='icon'>
        <ul>
            <li><img src={cv}/></li>
            <li><img src={cv1}/></li>
            <li><img src={cv2}/></li>
            <li><img src={cv3}/></li>
            <li><img src={cv4}/></li>
            <li><img src={cv5}/></li>
        </ul>
    </div>
    <div className='login-icon'>
        <ul>
        <li><img src={cv6}/></li>
        <li><img src={cv7} className='logout-icon'/></li>
        </ul>
    </div>
    </section>

    <section className='book-bash-ui'>
        
        <div className='second-header'>
            <h2>My Dashboard</h2>
            <input placeholder='Search book tittles'/>
           
           <div className='user-status'>
           <h7>Online</h7>
            <ul>
                <li><img src={cv8}/></li>
                <li><img src={cv9}/></li>
                <li><img src={cv10}/></li>
                <li><img src={cv11}/></li>
                <li><img src={cv12}/></li>
            </ul>
            </div>
        </div>
        <section className='main-container'>
        <div className='top-10'>
        <h3>Top 10 in India Story</h3>
        <ul>
            <li><img src={cv13}/></li>
            <li><img src={cv14}/></li>
            <li><img src={cv15}/></li>
            <li><img src={cv16}/></li>
        </ul>
        </div>
        <div className='inner-container'>
        <div className='save-book-lists'>
        <h3>Continue Reading..</h3>
        <div>
        <div className='save-book-list'>
        <div>
        <img src={cv17} alt=""/>
        </div>
        <div className='save-book-list__container'>
        <h3>QUEENE</h3>
        <h4>Chapter 14</h4>
            <p>Queenie Jenkins is a 25-year-old 
            Jamaican British woman living in London, 
            straddling two cultures and slotting neatly into neither.
            She works at a nation...</p>
        </div>
        </div>
        <div className='save-book-list'>
        <div>
        <img src={cv18} alt=""/>
        </div>
        <div className='save-book-list__container'>
        <h3>QUEENE</h3>
        <h4>Chapter 14</h4>
            <p>Queenie Jenkins is a 25-year-old 
            Jamaican British woman living in London, 
            straddling two cultures and slotting neatly into neither.
            She works at a nation...</p>
        </div>
        </div>
        </div>
        </div>
        <div className='popular-categories'>
        <h3>Discover popular categories</h3>
        <ul>
            <li>Action</li>
            <li>Adventure</li>
            <li>Autobiography</li>
            <li>comedy</li>
            <li>Crime</li>
            <li className='view-all__button'>View ALl</li>
        </ul>
        </div>
        </div>
        </section>
        <section className='recommendations-lists'>
        <h3>Friend's recommendations</h3>
        <div>
            <a href="">
            <img src={cv19} alt=""/>
            <div className='recommendations__title' >
            <h4>FIVE FEET APART</h4>
            <h5>By Rachael Lippincott</h5>
            </div>
            <p>In this moving story two teens 
            fall in love with just one minor complica...</p>
            </a>
            <a href="">
            <img src={cv20} alt=""/>
            <div className='recommendations__title' >
            <h4>ME BEFORE YOU</h4>
            <h5>By Jojo Moyes</h5>
            </div>
            <p>They had nothing in common until 
            love gave them everything to lose...</p>
            </a>
            <a href="">
            <img src={cv21} alt=""/>
            <div className='recommendations__title' >
            <h4>THE HUMAN BRAIN</h4>
            <h5>By Erik Eagleman</h5>
            </div>
            <p>A cognitive approach inside the 
            human brain by a Harvard profess...</p>
            </a>

        </div>
        </section>
    </section>

    </main>
    </div>
    </div>
    </>
);
}
export default Dashboard;