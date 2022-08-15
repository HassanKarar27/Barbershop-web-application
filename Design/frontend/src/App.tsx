
import React, { useContext, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Appointment from './pages/Appointment';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import useAuth from './hooks/useAuth';
import { AuthProvider } from './contexts/authContext';

import ProtectedRoute from './pages/ProtectedRoute';


function App() {

  const queryClient = new QueryClient();
  const authUse = useAuth();

  
  useEffect(() => {
   // authUse;
  }, [])

  return (
    <QueryClientProvider client={queryClient} >
      {/* <AuthProvider> */}

        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route index element={<Home />} />
            <Route path={"login"} element={<LogIn />} />
            <Route path={"register"} element={<Register />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"about"} element={<About />} />
            <Route path={"appointment"} element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={5000} />

      {/* </AuthProvider> */}
    </QueryClientProvider>
  )
}

export default App
