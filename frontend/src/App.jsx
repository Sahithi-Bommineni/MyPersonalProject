import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom' //to handle cient-side routing
import Registration from './components/Registration'
import Login from './components/Login'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
