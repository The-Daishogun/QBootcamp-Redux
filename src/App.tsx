import { Count } from './components/Count'
import { ChangeValueButton } from './components/ChangeCount'
import {  Logs } from './components/Logs'
import { Provider } from 'react-redux'
import {store} from "./store/store"
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div>
        <a href="https://quera.org" target="_blank">
          <img src="https://quera.org/static/images/logo/logo.2-37f748b73943.svg" className="logo quera" alt="quera logo" />
        </a>
      </div>
      <h1>React + Redux</h1>

      <Count />
      <div className="card">
        <ChangeValueButton amount={-1} />
        <ChangeValueButton amount={1} />
      </div>
      <Logs />
    </Provider>
  )
}

export default App
