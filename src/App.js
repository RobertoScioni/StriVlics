import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Gallery from './components/Gallery'





class App extends React.Component {
  render () {
    
    return (

      <Gallery search="fast" type="movie" />
    )
  }

  
}

export default App;
