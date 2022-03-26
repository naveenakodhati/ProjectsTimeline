// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseData} = props
  console.log(courseData)
  const {courseTitle, description, duration, tagsList} = courseData
  return (
    <div className="course-container">
      <div className="wraper">
        <h1>{courseTitle}</h1>
        <div className="icon-style">
          <AiFillClockCircle className="icons" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="ul-container">
        {tagsList.map(eachList => (
          <li className="li-element" key={eachList.id}>
            <p>{eachList.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
