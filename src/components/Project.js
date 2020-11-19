import React from 'react';

const Projects = (props) => {
  console.log(props);
  const { image, title, url, description } = props.project;
  return (
    <>
      <div className='home-project'>
        <a rel='noreferrer' href={url}>
          <img className='home-image' src={image} alt='logo' />
        </a>

        <div className='home-project-info'>
          <a rel='noreferrer' href={url} className='home-project-title'>
            {title}
          </a>

          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
