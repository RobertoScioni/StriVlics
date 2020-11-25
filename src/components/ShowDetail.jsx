import React from "react"
import {
	Col,
	Container,
	Image,
	ListGroup,
	ListGroupItem,
	Row,
} from "react-bootstrap"
import MyNavBar from "./MyNavBar"
import Comments from "./Comments"

/*
 * Create ShowDetail component that receives from route parameter the ID
 * and fetch all the informations (from omdb & comments too)
 */

class ShowDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = { id: this.props.match.params.id, movie: {} }
	}
	getMovie = async (imdbID) => {
		try {
			let response = await fetch(
				`http://www.omdbapi.com/?i=${imdbID}&apikey=aa722bea`,
				{ method: "GET" }
			)
			response = await response.json()
			this.setState({ movie: response })
			//console.log(response)
		} catch (error) {
			console.error(error)
		}
	}

	componentDidMount() {
		this.getMovie(this.state.id)
	}

	componentDidUpdate(oldProps) {
		if (this.props.match.params.id !== oldProps.match.params.id) {
			this.state = { id: this.props.match.params.id, movie: {} }
			this.getMovie(this.state.id)
		}
	}

	render(props) {
		let movie = this.state.movie
		return (
			<>
				<MyNavBar />
				<h1>{movie.Title}</h1>
				<Container>
					<Row>
						<Col>
							<Image src={movie.Poster} />
						</Col>
						<Col>
							<Row>
								<Col>
									<p>
										<b>Released: </b>
										{movie.Released}
									</p>
								</Col>
								<Col>
									<p>
										<b>Rated: </b>
										{movie.Rated}
									</p>
								</Col>
								<Col>
									<p>
										<b>Runtime: </b>
										{movie.Runtime}
									</p>
								</Col>
								<Col>
									<p>
										<b>Director: </b>
										{movie.Director}
									</p>
								</Col>
								<Col>
									<p>
										<b>Country: </b>
										{movie.Country}
									</p>
								</Col>
								<Col>
									<p>
										<b>Language: </b>
										{movie.Language}
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Writers</p>
									<div>{movie.Writer}</div>
									{/*Array.from(movie.Writer).map((writer) => (
											writer
                                        ))*/}
								</Col>
							</Row>
							<Row mt="2rem">
								<Col>
									<p>Actors</p>
									<div>{movie.Actors}</div>
									{/*Array.from(movie.Writer).map((writer) => (
											writer
                                        ))*/}
								</Col>
							</Row>

							<Row mt="2rem">
								<Col>
									<p>Summary</p>
									<div>{movie.Plot}</div>
									{/*Array.from(movie.Writer).map((writer) => (
											writer
                                        ))*/}
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
				<Comments id={this.state.id} />
				<footer>detail page for {this.state.id}</footer>
			</>
		)
	}
}

export default ShowDetail
