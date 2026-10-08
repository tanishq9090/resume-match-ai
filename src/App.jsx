import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Sidebar from './component/Sidebar/Sidebar'
import {Routes, Route} from "react-router-dom";
import Dashboard from './component/Dashboard/Dashboard'
import History from './component/History/History'
import Admin from './component/Admin/Admin'
import Login from './component/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </div>
  )
}

export default App
