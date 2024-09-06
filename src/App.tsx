import React, { useEffect } from 'react';
import './App.css';
import { getMovies } from './Services/Service';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Input from './Components/Input/Input';
function App() {

  useEffect(() => {
    getMovies({ s: 'avengers' })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Input />
      <HeroSection />
    </div>
  );
}

export default App;
