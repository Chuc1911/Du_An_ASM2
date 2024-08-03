import React from 'react'
import Header from '../Layouts/Header'
import Body from '../Layouts/Body'
import Footer from '../Layouts/Footer'
import CustomSlider from '../Component/CustomSlider'

export default function Home() {
  return (
    <div>
      <Header />
      <CustomSlider />
      <Body />
      <Footer />
    </div>
  )
}
