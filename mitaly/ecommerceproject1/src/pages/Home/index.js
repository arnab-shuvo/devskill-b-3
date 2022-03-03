import React from 'react';
import Header from './Header/Header';
import Slider from './Slider/slider';
import DailyDeals from './DailyDeals/dailyDeals';
import GenreC from './Genre/genre';
const Home =()=>{
return(
    <>
    <Header/>
    <Slider/>
    <DailyDeals/>
    <GenreC/>
   </>
);
}
export default Home;