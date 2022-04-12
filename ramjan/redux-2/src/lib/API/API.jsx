
// const BannerData =
//     fetch('https://fakestoreapi.com/products?limit=3&sort=desc')
//     .then( (res)=> res.json() )
//         .then((data) => console.log(data))

// export default BannerData

export const getDataForbanner = () => {
    return (
        fetch('https://fakestoreapi.com/products?limit=3&sort=desc')
        .then( (res)=> res.json() )
        .then((data) => data)
    )
    
   
}