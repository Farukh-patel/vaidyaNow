import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import themeContext from './contexts/themeContext'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Services from './components/Services'
import UserProvider from './contexts/UserProvider'
import MyConversations from './components/MyConversations'
import Profile from './components/Profile'
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        <UserProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/aboutus' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/myconversations' element={<MyConversations />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </themeContext.Provider>
    </>
  )
}

export default App
