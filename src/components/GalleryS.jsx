import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Row, Col, Spinner } from "react-bootstrap";

class Gallery extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount = (props) => {
    this.setState({ movies: this.props.movies, loading: false });
  };
  render() {
    return (
      <Row>
        {this.state.loading && (
          <div className="font-bold d-flex justify-content-center">
            <span className="text-center">Feching Movies</span>
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {this.state.movies.map((movie, index) => (
          <Col
            className="d-flex justify-content-center mt-2 mb-5"
            md={5}
            lg={4}
            key={index}
          >
            <Card>
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

export default Gallery;
