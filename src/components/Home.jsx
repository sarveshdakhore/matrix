// eslint-disable-next-line no-unused-vars
import React from 'react';
import About from './About';

const Home = () => {
  return (
    <>
    <div className="home-heading"style={{ display: 'flex', alignItems:'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'row' }}>
      <div className="home-content" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'coulmn' }}>
        <h1 className="heading" style={{ margin: 0}}>
          MATRIX
        </h1>
        <div>
          <h1 className="heading multimedia" style={{ margin: 0}}>
            VIT MULTIMEDIA CLUB
          </h1>
          <h2 style={{ paddingLeft: '2rem', margin: '0.2rem'}}>India&apos;s First Multimedia Club</h2>
        </div>
      </div>
      </div>
      <About />
    </>
  );
};

export default Home;
