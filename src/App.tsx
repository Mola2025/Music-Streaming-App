import React from 'react'
import Login from './Components/LoginForm/Login'
import Register from './Components/LoginForm/Register'
import ForgotPassword from './Components/LoginForm/ForgotPassword'
import SpotifyContainer from './Components/SpotifyContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/spotify-container" element={<SpotifyContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
