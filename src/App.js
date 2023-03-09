import './App.css'
import React,{ lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toast from './components/toast/Toast'
import Spinier from './components/spinier/Spinier'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'
import Resetpassword from './Pages/new-password/Resetpassword';
const Login = lazy(() => import('./Pages/login/Login')); 
const Newpassword = lazy(() => import('./Pages/new-password/new-password')); 
const Contact = lazy(() => import('./Pages/Contact/Contact')); 
const Signup = lazy(() => import('./Pages/signup/SignUp')); 
const AboutUs = lazy(() => import('./Pages/About-Us/AboutUs')); 
const BecomePartner = lazy(() => import('./Pages/Become-a-Partner/Become_a_Partner')); 



function App() {
  return (
    <>
   

 <BrowserRouter>
 <NavBar/>
 <Suspense fallback={<Spinier />}>
   <Routes>
  
   <Route path='Login' element={ <Login/>} />
   <Route path='Signup' element={ <Signup/>} />
   <Route path='New_password' element={ <Newpassword/>} />
   <Route path='Contact' element={ <Contact/>} />
   <Route path='AboutUs' element={ <AboutUs/>} />
   <Route path='BecomePartner' element={ <BecomePartner/>} />
   <Route path='*' element={ <> page not !!!</>} />
    <Route path='/reset-password/:id/:token' element={<><Resetpassword/></>}/>
   </Routes>
   </Suspense>
   <Toast/>
   <Footer/>
 </BrowserRouter>



    </>
  )
}

export default App