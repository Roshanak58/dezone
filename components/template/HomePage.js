import Image from 'next/image'
import React from 'react'
import ImageSlider from '../elements/ImageSlider'
import MiddlePart from './MiddlePart'
import MiddlePart2 from './MiddlePart2'
import MiddlePart3 from './MiddlePart3'

function HomePage() {
  return (
     <div  className="backgroundSite">
        <ImageSlider/>
        {/* <MiddlePart/>
        <MiddlePart2/>
        <MiddlePart3/> */}
    </div>
  )
}

export default HomePage