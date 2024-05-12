import React from 'react'
import PrimarySection from './PrimarySection'
import Banner from './Banner'
import JoinUs from './JoinUs'
import UpcomingClasses from './UpcomingClasses'
import StudyPlans from './StudyPlans'
import Footer from '../shared/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <PrimarySection />
            <JoinUs/>
            <UpcomingClasses/>
            <StudyPlans/>
            <Footer/>
        </div>
    )
}

export default Home