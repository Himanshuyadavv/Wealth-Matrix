import React from 'react';
import ProjectBox from './ProjectBox';



const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox  projectName="Portfolio" />
        <ProjectBox  projectName="Customer_Segmentation" />
        <ProjectBox projectName="Music_Genre" />
      </div>

    </div>
  )
}

export default Projects