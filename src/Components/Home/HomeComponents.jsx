import React from 'react'
import HomeBanner from './HomeBanner'
import FeatureProperties from './FeatureProperties'
import RecentSales from './RecentSales'
import HowWeWorks from './HowWeWorks'
import Services from './Services'

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <Services/>
      <FeatureProperties/>
      <HowWeWorks/>
      <RecentSales/>

    </div>
  )
}

export default HomeComponents