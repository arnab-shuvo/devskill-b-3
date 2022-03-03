import Header from "./header/header";
import Hero from "./hero/hero";
import Product from "./product/product";
import Footer from "./footer/footer";
import AmazeNFT from "./amazeNFT/amazeNFT";
import CollectionOver from "./collectionOver/collectionOver";
import './style.css'

const Home=()=>{
    return(
    <>
        <Header/>
        <Hero/>
        <div className='amazeNFT'><AmazeNFT/></div>
        <div className='collectionOver'><CollectionOver/></div>
        <div className='amazeNFT'><Product/></div>
        <div className='collectionOver'><Footer/></div>
       
    </>
    );
}
export default Home;