import './App.css'
import CreateEventForm from './Pages/CreateEventForm'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProfileDashboard from './Pages/ProfileDashboard';

function App() {

  return (
    <>

     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-event" element={<CreateEventForm/>} />
        <Route path="/profile" element={<ProfileDashboard/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </>
  )
}

export default App
