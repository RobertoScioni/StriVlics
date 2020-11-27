import React from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import MyNavBar from "./MyNavBar"
class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			disabled: false,
			validations: {},
			values: {},
		}
	}
	handleRegister = (event) => {
		event.preventDefault()
	}

	/**
	 * triggered when the value of a field changes, expects the caller to have an id
	 * @param {*} event
	 */
	handleChange = (event) => {
		console.log("change handler diagnostic")
		console.log("id", event.target.id, "value", event.target.value)
		let update = { ...this.state }
		update.values[event.target.id] = event.target.value
		console.log("update", update)
		this.setState(update)
	}

	/**
	 * triggered when a filed loses the focus.
	 * It expects to be called from an object with an id and a pattern property that contains a regular expression
	 *
	 * this evaluates the value angainst the regex of the caller and updates the state accordingly
	 *
	 * @param {*} event
	 */
	handleValidation = (event) => {
		console.log(
			"id",
			event.target.id,
			"value",
			event.target.value,
			"pattern",
			event.target.pattern
		)
		let update = { ...this.state }
		if (RegExp(event.target.pattern).test(event.target.value)) {
			console.log("aceptable value")
			update.validations[event.target.id] = true
		} else {
			console.log("error")
			update.validations[event.target.id] = false
		}
		this.setState({ validate: 1 })
	}

	componentDidUpdate() {
		console.log("component did update", this.state)
	}
	render() {
		return (
			<>
				<MyNavBar />
				<Container>
					<Form
						id="form"
						type="submit"
						onSubmit={this.handleRegister}
						noValidate
					>
						<Row>
							<Col>
								<Form.Control
									id="name"
									type="text"
									placeholder="Name"
									onChange={this.handleChange}
									pattern=".{2}" //a regex to evaluate if the data inserted is valid
									onBlur={this.handleValidation}
									isValid={this.state.validations.name} //until the users clicks on the field the state of the validation is undefined so no state will be applied here
									isInvalid={
										this.state.validations.name !== false ? false : true //until the users clicks on the field the state of the validation is undefined so this will return false
									}
								/>
							</Col>
							<Col>
								<Form.Control
									id="surname"
									type="text"
									placeholder="Surname"
									pattern=".{3}"
									onChange={this.handleChange}
									onBlur={this.handleValidation}
									isValid={this.state.validations.surname}
									isInvalid={
										this.state.validations.surname !== false ? false : true
									}
								/>
							</Col>
							<Col>
								<Form.Control
									id="birthDate"
									type="date"
									min="1910"
									onChange={this.handleChange}
									onBlur={this.handleValidation}
									isValid={this.state.validations.birthDate}
									isInvalid={
										this.state.validations.birthDate !== false ? false : true
									}
								/>
							</Col>
						</Row>

						<Form.Control
							id="email"
							type="email"
							placeholder="Address@provider.domain"
							onChange={this.handleChange}
							onBlur={this.handleValidation}
							pattern=".*@.*\..*"
							isValid={this.state.validations.email}
							isInvalid={this.state.validations.email !== false ? false : true}
						/>
						<Form.Control
							id="password"
							type="password"
							placeholder="password"
							onChange={this.handleChange}
							onBlur={this.handleValidation}
							pattern="((?=\d+[A-Za-z]+){8}|(?=[A-Za-z]\d+){8})"
							isValid={this.state.validations.password}
							isInvalid={
								this.state.validations.password !== false ? false : true
							}
						/>
						<Form.Control
							id="address"
							type="text"
							placeholder="street address"
							onChange={this.handleChange}
							onBlur={this.handleValidation}
							pattern=".+"
							isValid={this.state.validations.address}
							isInvalid={
								this.state.validations.address !== false ? false : true
							}
						/>
						<Form.Control
							id="city"
							type="text"
							placeholder="City"
							onChange={this.handleChange}
							onBlur={this.handleValidation}
							pattern=".+"
							isValid={this.state.validations.city}
							isInvalid={this.state.validations.city !== false ? false : true}
						/>
						<Form.Label>Postal Code</Form.Label>
						<Form.Control
							id="postalCode"
							type="number"
							onChange={this.handleChange}
							onBlur={this.handleValidation}
							pattern="\d{5}"
							isValid={this.state.validations.postalCode}
							isInvalid={
								this.state.validations.postalCode !== false ? false : true
							}
						/>
						<Form.Label>Credit Card</Form.Label>
						<Form.Control
							id="CC"
							type="number"
							onChange={this.handleChange}
							onBlur={this.handleValidation}
							pattern="(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$"
							isValid={this.state.validations.CC}
							isInvalid={this.state.validations.CC !== false ? false : true}
						/>
						<Button variant="dark" disabled={this.state.disabled} type="submit">
							Submit Registration
						</Button>
					</Form>
				</Container>
			</>
		)
	}
}
export default Register
