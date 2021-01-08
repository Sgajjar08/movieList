
import './App.css';

import Header                  from './Components/Header'
import MovieList               from './Components/MovieList'
import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}                              from "react-router-dom";
import axios                   from "axios";
import MovieDetailComponent    from "./Components/MovieDetailComponent";

function App() {
    const [value, setValue] = useState('test')
    const [data, setData] = useState('test')
    const [selectedMovie, setSelectedMovie] = useState('test')
    useEffect(()=>{
        axios.get(`https://api.tvmaze.com/search/shows?q=${value}`)
            .then(res =>{
                setData(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [value])
  return (
    <div className="App">
        <Header onActivityChange={value => setValue(value)}/>
        <Router>
            <Switch>
                <Route path="/movie/:id">
                    <MovieDetailComponent selectedMovie={selectedMovie}/>
                </Route>
                <Route exact path="/">
                    <MovieList searchValue={value} data={data} clickedMovie={movie => setSelectedMovie(movie)}/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
