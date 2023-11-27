import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import PaymentDetails from './component/PaymentDetails';
import PaymentPage from './component/PaymentPage';
import HomePage1 from './component/HomePage1';
import SignInSide from './component/SignInSide';
import SignUp from './component/SignUp';
// import SearchFlights from './component/Booking';
// import Booking from './component/Booking';
import FlightAvailability from './component/FlightAvailability';
import Destinations from './component/Destinations';
// import Reg from './component/Reg';

function App() {
  return (
    <div className='App'>
     

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage1/>} />
        <Route path="/home" element={<HomePage1/>} />
        <Route path="/signin" element={<SignInSide/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/flights" element={ <FlightAvailability/>} />
        <Route  path="/p" element={<PaymentDetails/>} />
        <Route  path="/payment" element={<PaymentPage/>} />
        <Route  path="/d" element={<Destinations/>} />
    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;


