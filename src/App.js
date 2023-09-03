

import Header from './Components/Header';
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import Discount from './Components/Discount';

import './App.css';
import Booking from './Components/Booking';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import ReactSlick from './Components/ReactSlick';



function App() {
  return (
    <div className="bg">
      <Header/>
      <Home/>
      <Reviews/>
      <ReactSlick/>
      <Discount/>
      <Booking/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
