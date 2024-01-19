import React from 'react'
import Intro from '../sections/Home/Intro'
import WeBelieve from '../sections/Home/WeBelieve'
import WhyUi from '../sections/Home/WhyUi'
import FacultyReview from '../sections/Home/FacultyReview'
import LatestPosts from '../sections/Home/LatestPosts'
import UpcomingEvents from '../sections/Home/UpcomingEvents'
import Lead from '../sections/Home/Lead.js'

const Home = () => {
  return (
    <div>
      <Intro />
      <WhyUi />
      <WeBelieve />
      <Lead />
      <UpcomingEvents />
      <FacultyReview />
      <LatestPosts />
    </div>
  )
}

export default Home
