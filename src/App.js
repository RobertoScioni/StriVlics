import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Gallery from './components/Gallery'
import Gallery2 from './components/Gallery2'

import MyNavBar from "./components/MyNavBar"
class App extends React.Component {
  render () {
    
    return (
      <>
      <MyNavBar/>


      <Gallery search="" type=" series" />
      <Gallery2  />
       </>
    )
  }
}

export default App;
