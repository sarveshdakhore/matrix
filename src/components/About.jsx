// eslint-disable-next-line no-unused-vars
import React from 'react';
import image2 from '../assets/image2.png';
import escape from '../assets/escapematrix.png';
import bollywood from '../assets/bollywood.png';
import Card from './Card';

const About = () => {
  return (
    <div className="background">
      <div className="events">
        <h1 style={{ fontSize: 60 }}>
          Our Flagship <span style={{ color: '#C477CB' }}> Events</span>
        </h1>
        <div className="images">
          <img src={escape} alt="" />
          <img src={bollywood} alt="" />
        </div>
      </div>
      <Card/>
      <div className="aboutus">
        <div className="aboutus-image">
          <img src={image2} alt="" />
        </div>
        <div className="aboutus-content">
          <h1 style={{ fontSize: 60 }}>
            <span style={{ color: '#C477CB' }}>ABOUT</span> US
          </h1>
          <div className="aboutus-text">
            <div className="aboutus-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas mollitia asperiores consequatur dolore nostrum, voluptatem officiis ex? Maiores similique suscipit incidunt, facilis dolorem adipisci autem, doloribus optio velit quidem neque?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugit rem dolorum cum voluptatibus enim voluptates ratione nesciunt et animi voluptas doloremque quo tempora illo, dignissimos harum odit, expedita quibusdam debitis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
