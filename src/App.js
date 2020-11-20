import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Gallery from './components/Gallery'
import MyNavBar from "./components/MyNavBar"
class App extends React.Component {
  render () {
    
    return (
      <MyNavBar/>
      <Gallery search="fast" type="movie" />
    )
  }
}

export default App;
