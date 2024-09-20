import React, { useEffect } from 'react';
import './App.css';
import { getMovies } from './Services/Service';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Input from './Components/Input/Input';
import { useMyContext } from './Contexts/MyContext';
function App() {
  const { searchedMovie, setMovies, setResponse, setPages, setIsLoading, currentPage, type } = useMyContext();
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const res = await getMovies({ s: searchedMovie || "avengers", page: currentPage, type: type });
        if (res.Response) {
          const totalResults = res.totalResults;
          const itemsPerPage = 10;
          const totalPages = Math.max(1, Math.ceil(totalResults / itemsPerPage));
          const pagesArray = [...Array(totalPages)].map((_, index) => index + 1);
          setPages(pagesArray);
          setMovies(res.Search);
          setResponse(true)
        }
      } catch (error) {
        setResponse(false)
        setPages([])
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchedMovie, currentPage, setPages, type]);

  return (
    <div className="App">
      <Navbar />
      <Input />
      <HeroSection />
    </div>
  );
}

export default App;
