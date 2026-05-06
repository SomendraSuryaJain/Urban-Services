import React from 'react'
import AllServicesPage from '../components/Main_Services_Page/AllServicesPage'
import ServicesPage from '../components/homesection/home_Service_Section/ServicesPage'
import MenuServicesPage from '../components/Main_Services_Page/MenuServicesPage'


const MainServices = () => {
  return (
    <div>
      {/* <AllServicesPage/> */}
      <ServicesPage showButton={false} />
       {/* <MenuServicesPage/> */}
    </div>
  )
}

export default MainServices
