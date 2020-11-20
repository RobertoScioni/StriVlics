import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-elastic-carousel";
import { Card, Row, Container } from "react-bootstrap";

class Gallery2 extends React.Component {
  state = {
    movies: [],
    search: "fast furious",
    type: "movie",
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?&s=" +
          this.state.search +
          "&apikey=ee4589ef&type=" +
          this.state.type
      );
      let movies = await response.json();
      this.setState({ movies: movies.Search });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Container fluid>
        <h1 style={{ marginLeft: 85 }}>{this.state.search}</h1>
        <Carousel itemsToShow={5}>
          {this.state.movies.map((movie, index) => (
            <Row>
              <Card
                className="d-flex justify-content-center mt-2 mb-5"
                md={4}
                lg={3}
                key={index}
              >
                <Card.Img
                  variant="top"
                  style={{ objectFit: "cover", width: 300, height: 400 }}
                  src={movie.Poster}
                  className="mx-auto"
                />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Type}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{movie.Year}</small>
                </Card.Footer>
              </Card>
            </Row>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default Gallery2;
