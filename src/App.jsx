import React from 'react';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AppRouting from './AppRouting';
import ProjectView from './Page/ProjectView';
import ViewAllSkills from './Page/ViewAllSkills';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Router>
      <Navbar />
        <Routes className="justify-center">
          <Route path='/' element={<AppRouting />} />
          <Route path='/allskill' element={<ViewAllSkills />} />
          <Route path='/project/:id' element={<ProjectView />} />
        </Routes>
        <Footer />
        <ToastContainer position='bottom-right' theme='dark' />
      </Router>
    </div>
  );
}

export default App;
