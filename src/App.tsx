import React, { useEffect } from 'react';
import './App.css';
import { getMovies } from './Services/Service';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Input from './Components/Input/Input';
import { useMyContext } from './Contexts/MyContext';
function App() {
  const { searchedMovie, setMovies, setResponse, setPages } = useMyContext();
  useEffect(() => {
    getMovies({
      s: searchedMovie, page: 1
    })
      .then((res) => {
        setResponse(res.Response)
        if (res.Response) {
          const totalResults = res.totalResults
          const itemsPerPages = 10
          const totalPages = Math.ceil(totalResults / itemsPerPages)
          const pages = [...Array(totalPages)].map((_, index) => index + 1)
          setPages(pages)
          setMovies(res.Search)

        }
      })
      .catch((error) => {
        console.log("error", error)
      })
  }, [searchedMovie])

  return (
    <div className="App">
      <Navbar />
      <Input />
      <HeroSection />
    </div>
  );
}

export default App;
