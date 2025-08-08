import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom' //to handle cient-side routing
import Registration from './components/registration'
import Login from './components/login'
import Homepage from './components/homepage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
