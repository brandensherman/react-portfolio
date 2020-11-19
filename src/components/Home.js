import React from 'react';
import ritual from '../images/ritual.png';
import spritelab from '../images/spritelab.png';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-header'>
        <h1 className='home-title'>Recent Projects</h1>
      </div>
      <div className='home-grid'>
        <div className='home-project'>
          <a rel='noreferrer' href='https://ritual-records.herokuapp.com/'>
            <img className='home-image' src={ritual} alt='logo' />
          </a>

          <div className='home-project-info'>
            <a
              rel='noreferrer'
              href='https://ritual-records.herokuapp.com/'
              className='home-project-title'
            >
              Ritual Records
            </a>

            <p>
              Ritual Records is an eCommerce platform with a full featured
              shopping cart.
            </p>
          </div>
        </div>

        <div className='home-project'>
          <a rel='noreferrer' href='https://ritual-records.herokuapp.com/'>
            <img className='home-image' src={spritelab} alt='logo' />
          </a>

          <div className='home-project-info'>
            <a
              rel='noreferrer'
              href='https://spritelab.herokuapp.com/'
              className='home-project-title'
            >
              SpriteLab
            </a>

            <p>
              SpriteLab is a real-time, collaborative web application for
              creating animated sprites and pixel art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
