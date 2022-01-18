import { useEffect } from 'react'

// import AppRoute from './Components/AppRoute'
import Home from './Pages/Home'

const axios = require('axios')

function App() {
  useEffect(() => {
    axios.get(process.env.REACT_APP_DB_URL + "objects/").then(console.log).catch(console.error)
  }, [])

  return <Home />
}

export default App
