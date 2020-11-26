import React from "react"
import {
	Navbar,
	Nav,
	NavDropdown,
	Button,
	Form,
	FormControl,
	Image,
	Modal,
} from "react-bootstrap"
import { withRouter } from "react-router-dom"

import Gallery from "./Gallery"

class MyNavBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			query: "",
			show: false,
		}
	}

	handleEvent = (e) => {
		this.setState({ query: e.target.value })
	}

	handleToggle = () => {
		this.setState({ show: !this.state.show })
	}

	componentDidUpdate(oldProps) {
		if (this.props.match.params.id !== oldProps.match.params.id) {
			this.handleToggle()
		}
	}

	getData = async () => {
		const key = "&apikey=c4555b36"

		try {
			let response = await fetch(
				`http://www.omdbapi.com/?s=${this.state.query}${key}`,
				{
					method: "GET",
				}
			)

			response = await response.json()
			this.setState({ movies: response.Search })
			this.handleToggle()
		} catch (error) {
			console.log(error)
		}
	}
	render() {
		return (
			<>
				<Navbar variant="dark">
					<Navbar.Brand href="/">
						<Image
							src="/assets/Netflix-Logo.wine.png"
							style={{ height: "50px" }}
							rounded
						/>
					</Navbar.Brand>
					<Button href="/Register">Register</Button>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto"></Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
								onChange={this.handleEvent}
							/>
							<Button variant="outline-success" onClick={this.handleToggle}>
								Search
							</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<Modal show={this.state.show} onHide={this.handleToggle}>
					<Modal.Header closeButton>
						<Modal.Title>Search reuslt for : {this.state.query}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Gallery search={this.state.query} type="" />
					</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default withRouter(MyNavBar)
