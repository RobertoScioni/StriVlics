import React from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import MyNavBar from "./MyNavBar"
class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			disabled: false,
		}
	}
	handleRegister = (event) => {
		event.preventDefault()
	}
	handleChange = (event) => {}
	render() {
		return (
			<>
				<MyNavBar />
				<Container>
					<Form type="submit" onSubmit={this.handleRegister} validated="false">
						<Row>
							<Col>
								<Form.Control
									id="name"
									type="text"
									placeholder="Name"
									minLength={2}
									required
									aria-required
								/>
							</Col>
							<Col>
								<Form.Control
									id="surname"
									minLength={3}
									typer="text"
									placeholder="Surname"
									required
									aria-required
								/>
							</Col>
							<Col>
								<Form.Control
									id="birthDate"
									type="datetime-local"
									min="1910:01:01:01:00"
									required
									aria-required
								/>
							</Col>
						</Row>

						<Form.Control
							id="email"
							type="email"
							placeholder="Address@provider.domain"
							required
							aria-required
						/>
						<Form.Control
							id="password"
							type="password"
							placeholder="password"
							required
							aria-required
						/>
						<Form.Control
							id="address"
							type="text"
							placeholder="street address"
							required
							aria-required
						/>
						<Form.Control
							id="city"
							type="text"
							placeholder="City"
							required
							aria-required
						/>
						<Form.Label>Postal Code</Form.Label>
						<Form.Control
							id="postalCode"
							type="number"
							onChange={this.handleChange}
							required
							aria-required
						/>
						<Form.Label>Credit Card</Form.Label>
						<Form.Control id="CC" type="number" required aria-required />
						<Button
							variant="dark"
							disabled={this.state.disabled}
							type="submit"
							required
							aria-required
						>
							Submit Registration
						</Button>
					</Form>
				</Container>
			</>
		)
	}
}
export default Register
