import React from 'react';
import Header from '../Components/Home/Header';
import Title from '../Components/Home/Title';
import About from '../Components/Home/About';
import Parallax from '../Components/Home/Parallax';


export function Home(props) {

    return (
      <div>
        <Header />
        <main>
          <Title />
          <Parallax />
          <About />
        </main>
      </div>
    );
  
}

export default Home;
