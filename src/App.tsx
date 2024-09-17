import React, { useEffect } from 'react';
import './App.css';
import { getMovies } from './Services/Service';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Input from './Components/Input/Input';
import { useMyContext } from './Contexts/MyContext';
function App() {
  const { searchedMovie, setMovies } = useMyContext();
  useEffect(() => {
    getMovies({ s: searchedMovie })
      .then((res) => {
        console.log(res.Search)
        setMovies(res.Search)
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
