import './App.css'
import CreateEventForm from './Pages/CreateEventForm'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>

     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-event" element={<CreateEventForm/>} />

      </Routes>
      <ToastContainer/>
    </Router>
    </>
  )
}

export default App
