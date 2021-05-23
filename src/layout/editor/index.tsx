
import Header from './components/header'
import Content from './components/content'
// import Footer from 'layout/components/footer'

export default function EditorLayout(){
  return <div className="default-layout-wrap">
    <Header />
    
    <Content />

    {/* <Footer /> */}
  </div>
}