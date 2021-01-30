import React from 'react'
import Header from 'layout/components/header'
import Content from 'layout/components/content'

export default function DefaultLayout(){
  return <div className="other-layout-wrap">
    <Header />
    
    <Content />
  </div>
}