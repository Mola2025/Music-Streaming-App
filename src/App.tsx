import React from 'react'
import Login from './Components/LoginForm/Login'
import Register from './Components/LoginForm/Register'
import ForgotPassword from './Components/LoginForm/ForgotPassword'
import SpotifyContainer from './Components/SpotifyContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forum from './Components/Forum/Forum'
import ProfileEdit from './Components/ProfileEdit'
import ChangeEmail from './Components/ChangeEmail'
import { ThemeProvider } from './Components/ThemeContext'


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/spotify-container" element={<SpotifyContainer />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/edit' element={<ProfileEdit />} />
          <Route path='/change-email' element={<ChangeEmail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
