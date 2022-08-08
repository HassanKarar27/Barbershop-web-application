
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Appointment from './pages/Appointment';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route index element={<Home />} />
          <Route path={"login"} element={<LogIn />} />
          <Route path={"register"} element={<Register />} />
          <Route path={"contact"} element={<Contact />} />
          <Route path={"about"} element={<About />} />
          <Route path={"appointment"} element={<Appointment />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
