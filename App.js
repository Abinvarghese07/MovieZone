import './App.css';
import Popular from './components/Popular';
import { useState } from 'react';
import { useEffect } from 'react';
import Searchbox from './components/Searchbox';

function App() {
  
  const[movieData,setMovieData] = useState([])
  const[search,setSearch] = useState('') 


  const getMovies = async () =>{
    const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=67dff316c0a30e88ec4e2d5f5e81d77e`
    const response = await fetch(api_url)
    const data = await response.json()
    if(data.results){
      console.log (data);
      setMovieData (data.results);

    }
    
  }
  const searchMovies = async () =>{
  const search_url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=67dff316c0a30e88ec4e2d5f5e81d77e`
  const response = await fetch(search_url)
  const data = await response.json()
  // setMovieData(data.results)
  if (data.results) {
  console.log (data);
  setMovieData (data.results);
}

 

    
  }





  useEffect(() => {
    getMovies()
  },[])



  const getSearch = () =>{
    searchMovies()  
  }
 

  


  return (
    <div className="App">
      <Searchbox  search={search} setSearch={setSearch} eventHandler = {getSearch} ></Searchbox>
      <Popular movieData = {movieData} setMovieData={setMovieData}></Popular>
    </div>
  );
}

export default App;
