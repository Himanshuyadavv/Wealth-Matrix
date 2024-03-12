import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Music_GenreDesc : " Developed a deep learning-based music genre classifier that achieved state-of-the-art accracy, demonstrating expertise in applying advanced neural network architectures to real-world problems",
    


    Customer_SegmentationDesc : "Applied advanced data analytics techniques to categorize the customer base into distinct groups, considering factors such as gender, age, interests, and spending habits.",
    

    PortfolioDesc:" Developed a comprehensive professional portfolio project to showcase skills, achievements, and projects in a compelling manner."

    
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

      
            
          

            <a href={desc[projectName + 'Website']} target='_blank'>
          
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox