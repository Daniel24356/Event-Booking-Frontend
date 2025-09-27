import './App.css'
import CreateEventForm from './Pages/CreateEventForm'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProfileDashboard from './Pages/ProfileDashboard';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';

function App() {

  return (
    <>

     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/create-event" element={<CreateEventForm/>} />
        <Route path="/profile" element={<ProfileDashboard/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </>
  )
}

export default App
