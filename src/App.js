// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Navbar} from './navbar/navbar'
import {Header} from './header/header'
import {SectionPortfolio} from './sectionPortfolio/sectionPortfolio'; 
import {SectionDescription} from './sectionDescription/SectionDescription';
import {SectionContact} from './sectionContact/SectionContact';
import {Footer} from './footer/Footer'
import {Loading} from './loading/Loading'

import { useForceLoading } from "./hooks"
import { Tecnologia } from './carouselDeTecnologias/Tecnologia';

function App() {

  const isLoading = useForceLoading(2);

  if(isLoading)
    return <Loading />

  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <SectionPortfolio />
      <Tecnologia/>
      <SectionDescription />
      <SectionContact />
      <Footer /> 
    </React.Fragment>
  );
}

export default App;
