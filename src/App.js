import Home from './components/Home'
import { UserStorage } from './context/UserContext'

function App() {
  return (
    <div className="App">
      <UserStorage>
        <Home />
      </UserStorage>
    </div>
  )
}

export default App
