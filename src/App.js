import React from 'react';
import TopNav from "./Components/TopNav";
import Footer from './Components/Footer';
import Preloader from './Components/Preloader';
import Carousel from './Components/Carousel';
import MissionVission from './Components/MissionVission';


function App() {
  return (
    <React.Fragment>
      <Preloader />
      <TopNav />
      <Carousel />
      <MissionVission />
      <Footer />
    </React.Fragment>

  );
}

export default App;
