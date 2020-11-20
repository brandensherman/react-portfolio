import React from 'react';

const Projects = (props) => {
  console.log(props);
  const { image, title, deployedUrl, description, githubUrl } = props.project;
  return (
    <>
      <div className='home-project'>
        <a target='blank' rel='noreferrer' href={deployedUrl}>
          <img className='home-image' src={image} alt='logo' />
        </a>

        <div className='home-project-info'>
          <a
            target='blank'
            rel='noreferrer'
            href={deployedUrl}
            className='home-project-title'
          >
            {title}
          </a>

          <p>{description}</p>

          {title === 'Postman 101' ? (
            <div className='home-project-links'>
              <a
                target='blank'
                rel='noreferrer'
                href={deployedUrl}
                className='home-projects-link'
              >
                Tutorial
              </a>
            </div>
          ) : (
            <div className='home-project-links'>
              <a
                target='blank'
                rel='noreferrer'
                href={githubUrl}
                className='home-projects-link'
              >
                Github
              </a>
              <a
                target='blank'
                rel='noreferrer'
                href={deployedUrl}
                className='home-projects-link'
              >
                Deployed
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
