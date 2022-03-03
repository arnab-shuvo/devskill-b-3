import { Grid } from "@mui/material";
import './hero.css';
const Hero =()=>{
    return(
        <>
        <div className='hero'>
        <Grid container spacing={2}>
            <Grid item md={4}>
                <Grid item xs={12}>
                <div >
                    <div className='hero_1'>
                    <h2>DISCOVER, AND COLLECT <br/> DIGITAL
                     ART NFTS</h2>
                     <p>The world's First and largest digital marketplace
                    for <br/> crypto collectibles and non-fungible
                    tokens(NFTs).<br/>
                    Buy,sell, and discover exclusive digital items</p>
                    <button>Explore now</button>
                    </div>
                    <div className='hero_2'>
                    <button><h1>98k+</h1><h4>Artwork</h4></button>
                    <button><h1>12k+</h1><h4>Auction</h4></button>
                    <button><h1>15kk+</h1><h4>Artist</h4></button>
                    </div>
                 </div>
                </Grid>
            </Grid>
            <Grid item md={4}>
                <Grid item xs={12}>
                    <div className='splash1'>
                    <div className='txt_s'>
                    <h2>Abstr Gradient NFT</h2>
                    <h3>Arkhan17</h3>
                    </div>
                     <div className='txt'>
                        <li><span>Current Bid</span><span>Ends in</span></li>
                        <li><span>0.25ETH</span><span>12h 43m 42s</span></li>
                     </div> 
                    </div>
                    <div className='splash2'></div><div className='splash3'></div>
                        
                    

                </Grid>
            </Grid>
        </Grid>
        </div>
        </>
    );
}
export default Hero;