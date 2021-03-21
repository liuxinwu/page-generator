import React, { useState, useEffect } from 'react'
import Dialog, { info, success } from 'components/common/dialog'

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [num, setNum] = useState(0)
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  };

  useEffect(() => {
    if (num < 5) {
      setTimeout(() => {
        setNum(num + 1)
      }, 1000)
    }
  }, [num])

  useEffect(() => {
    setCount(count + 1)
    console.log(count)

    setTimeout(() => {
      setCount(count + 1)
      console.log(count)
    }, 1000);
  }, [])

  function handleDialogVisible() {
    setVisible(!visible)
  }

  return <>
    <h1>home</h1>

    <Dialog visible={visible} closeDialog={handleDialogVisible}><h2>dialog</h2></Dialog>
    {/* <Dialog visible={visible} closeDialog={handleDialogVisible} content={<span>{num}</span>}><h2>dialog</h2></Dialog> */}

    <button onClick={handleDialogVisible}>handleDialogVisible</button>
    <br />
    {num}
    <button onClick={
      () => {
        setNum(num + 1)
      }
    }>add</button>
    <br />
    <button onClick={info}>info</button>
    <br />
    <button onClick={() => success({
      type: 'success',
      content: <span>{ num }</span>,
      okText: '关闭'
    })}>success</button>

    <br/>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>
      setCount
    </button>
    <button onClick={handleClick}>
      Delay setCount
    </button>
  </>
}

// import React from 'react'

// class Home extends React.Component {
//   state = {
//     count: 0
//   }

//   componentDidMount() {
//     this.setState({
//       count: this.state.count + 1
//     })
//     console.log(this.state.count)

//     setTimeout(() => {
//       this.setState({
//         count: this.state.count + 1
//       })
//       console.log(this.state.count)
//     }, 1000);
//   }

//   render() {
//     return 'home'
//   }
// }

// export default Home