import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Card, Row, Col } from "react-bootstrap";

class Gallery extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?&s=" +
          this.props.search +
          "&apikey=ee4589ef&type=" +
          this.props.type
      );
      let movies = await response.json();
      this.setState({ movies: movies.Search });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Row>
        <CardGroup>
          {this.state.movies.map((movie, index) => (
            <Col className="d-flex justify-content-center" md={3}>
              <Card key={index}>
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
        </CardGroup>
      </Row>
    );
  }
}

export default Gallery;
