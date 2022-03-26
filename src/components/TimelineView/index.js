// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="main-bg-container">
      <h1 className="main-heading">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: 'blue',
          secondary: 'white',
        }}
      >
        {timelineItemsList.map(eachData =>
          eachData.categoryId === 'COURSE' ? (
            <CourseTimelineCard courseData={eachData} />
          ) : (
            <ProjectTimelineCard projectData={eachData} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
