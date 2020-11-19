import React from 'react';
import ritual from '../images/ritual.png';
import spritelab from '../images/spritelab.png';
import Project from './Project';
import firstrow from '../projects/firstrow';
import secondrow from '../projects/secondrow';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-header'>
        <h1 className='home-title'>Recent Projects</h1>
      </div>

      <div className='home-projects-container'>
        <div className='home-row'>
          {firstrow.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
        <div className='home-row'>
          {secondrow.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
