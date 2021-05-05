import React from 'react'
import Header from 'layout/components/header'
import Content from 'layout/components/content'
// import Footer from 'layout/components/footer'

export default function DefaultLayout(){
  return <div className="default-layout-wrap">
    <Header />
    
    <Content />

    {/* <Footer /> */}
  </div>
}