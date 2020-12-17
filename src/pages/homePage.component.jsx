import React from 'react';


import Header from './../components/header/header.component';
import Banner from './../components/banner/banner.component';
import Count from './../components/counting/counting.component';
import Services from './../components/services/services.component';
import Portfolio from './../components/portfolio/portfolio.component';
import ImagePro from './../components/images/imagepro.component';
import Middle from  './../components/middle/middle.component';
import Contact from './../components/contact/contact.component';
import Prop from './../components/properties/prop.component';

const Homepage =() => (

    <div className="Homepage">

<Header/>
      <Banner/>

      <Count/>
      <Services/>
     
      <Portfolio/>
      <Prop/>
      <ImagePro/>
      <Middle/>
      <Contact/>
     
  
    </div>


);

export default Homepage;
