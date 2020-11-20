import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import './App.css';
import './style.css';



class App extends React.Component {

  state = {
    movies: []
  }
  componentDidMount = async () => {
    try {
       let response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ee4589ef&s=fast")
       let movies = await response.json()
      console.log(movies[0])
      this.setState({ movies: movies})
    } catch (error) {
      console.log(error)
    }
  }
  render () {
    return (
  
      <div className="App">
        {movies.map((movie) => {
          console.log(movie)

        
        })}
      </div>
    
    );
  }
}

export default App;
