import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './main.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from 'store/index'
import 'animate.css'
import 'scss/common.scss'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
