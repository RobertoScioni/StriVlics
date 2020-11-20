import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { CardGroup, Card, Row, Col } from "react-bootstrap";

class Gallery2 extends React.Component {
  state = {
    movies: [],
    search:"fast furious",
    type:"movie",
   
  };

  componentDidMount = async () => {
    try {
     
      
        let response = await fetch(
          "http://www.omdbapi.com/?&s=" +
            this.state.search+
            "&apikey=ee4589ef&type=" +
            this.state.type)
            let movies = await response.json();
            this.setState({ movies: movies.Search });

     

    
      
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Row>
          <h2 className="d-block">{this.state.search}</h2>
        
          {this.state.movies.map((movie, index) => (
            <Col className="d-flex justify-content-center mt-2 mb-5" md={4} lg={3} key={index}>
              <Card >
                <Card.Img
                  variant="top"
                  style={{ width: 300, height: 400 }}
                  src={movie.Poster}
                />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Type}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{movie.Year}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        
      </Row>
    );
  }
}

export default Gallery2;
