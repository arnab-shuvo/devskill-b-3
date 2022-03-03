import { Grid } from "@mui/material";

const Footer =()=>{
    return(
        <>
        <Grid container justifyContent={'center'}>
            <Grid item md={6}>
            <Grid item xs={12}>
                <h2>NFTERS</h2>
                <p>The world's First and largest digital marketplace
                 for <br/> crypto collectibles and non-fungible
                  tokens(NFTs).<br/>
                 Buy,sell, and discover exclusive digital items</p>
            </Grid>
            </Grid>
            <Grid item md={3}>
            <Grid item xs={12}>
                <h3>Market Palace</h3>
                <ul>
                    <li>All NFTs</li>
                    <li>New</li>
                    <li>Art</li>
                    <li>Sports</li>
                    <li>Utility</li>
                    <li>Music</li>
                    <li>Domain Name</li>
                </ul>
            </Grid>
            </Grid>
            <Grid item md={3}>
            <Grid item xs={12}>
                <h3>My Account</h3>
                <ul>
                    <li>Profile</li>
                    <li>Favourite</li>
                    <li>My Collections</li>
                    <li>Settings</li>
                </ul>
            </Grid>
            </Grid>
        </Grid>
        </>
    );
}
export default Footer;