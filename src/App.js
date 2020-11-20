import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Gallery from './components/Gallery'
import Gallery2 from './components/Gallery2'





class App extends React.Component {
  render () {
    
    return (
      <>

      <Gallery search="" type=" series" />
      <Gallery2  />
      </>
    )
  }

  
}

export default App;
