import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='Https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
             alt=''/>
      </div>

      <div className='home_row'>
        <Product title="The lean startup"
                 price={29.99}
                 image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
                 rating={5}
        />
        <Product title="The lean startup 2"
                 price={99.99}
                 image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
                 rating={3}
        />
        
      </div>

      <div className='home_row'>
      <Product title="The lean startup 3"
                 price={9.99}
                 image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
                 rating={1}
        />
        <Product title="The lean startup 4"
                 price={229.99}
                 image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
                 rating={5}
        />
        <Product title="The lean startup 5"
                 price={129.99}
                 image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
                 rating={2}
        />
      </div>

      <div className='home_row'>
      <Product title="The lean startup 6"
                 price={1129.99}
                 image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
                 rating={5}
        />
      </div>
    </div>
  )
}

export default Home;
