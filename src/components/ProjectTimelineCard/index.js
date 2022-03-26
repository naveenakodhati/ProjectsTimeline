// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectData

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" />
      <div className="project-wraper ">
        <h1>{projectTitle}</h1>
        <div className="icon-style">
          <AiFillCalendar className="icons" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <a className="anchor-el" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
