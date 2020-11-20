import React from 'react';
import Project from './Project';
import firstrow from '../data/firstrow';
import secondrow from '../data/secondrow';

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
