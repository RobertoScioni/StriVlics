import React from "react"
import { ListGroup, Form, ListGroupItem, Button } from "react-bootstrap"
import Comment from "./Comment"

class Comments extends React.Component {
	constructor(props) {
		super(props)
		console.log(this.props.id)
		this.state = {
			id: this.props.id,
			comments: [],
			comment: "",
			deleted: false,
		}
		this.deleteComment = this.deleteComment.bind(this)
		this.editComment = this.editComment.bind(this)
	}
	getComments = async () => {
		try {
			let comments = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" + this.state.id,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDYyNTIzMjUsImV4cCI6MTYwNzQ2MTkyNX0.cWgbKpQDaGkoMZoq_638vuR51bgAzeNHJ0hH2rFs4RA",
					},
					method: "GET",
				}
			)
			//console.log(comments)
			comments = await comments.json()
			this.setState({ comments })
			//console.log(comments)
		} catch (error) {
			console.log("error", error)
		}
	}
	addComment = async (event) => {
		event.preventDefault()
		let body = JSON.stringify({
			elementId: this.state.id,
			rate: "3",
			comment: this.state.comment,
		})
		try {
			await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDYyNTIzMjUsImV4cCI6MTYwNzQ2MTkyNX0.cWgbKpQDaGkoMZoq_638vuR51bgAzeNHJ0hH2rFs4RA",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: body,
			})
			this.setState({ comment: "" })
		} catch (error) {
			console.error(error)
		}
	}
	deleteComment = async (event) => {
		let id = event.target.id
		console.log(id)
		try {
			let comments = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" + id,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDYyNTIzMjUsImV4cCI6MTYwNzQ2MTkyNX0.cWgbKpQDaGkoMZoq_638vuR51bgAzeNHJ0hH2rFs4RA",
					},
					method: "DELETE",
				}
			)
			//console.log(comments)
			comments = await comments.json()
			this.setState({ deleted: true })
			//console.log(comments)
		} catch (error) {
			console.log("error", error)
		}
	}
	componentDidMount() {
		this.getComments()
	}

	editComment = async (id, comment) => {
		let body = JSON.stringify({
			elementId: id,
			rate: "3",
			comment: comment,
		})
		let url =
			"https://striveschool-api.herokuapp.com/api/comments/" + this.state.id
		console.log("id", id, "comment", comment, "body", body, "url", url)
		try {
			let comments = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" + this.state.id,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDYyNTIzMjUsImV4cCI6MTYwNzQ2MTkyNX0.cWgbKpQDaGkoMZoq_638vuR51bgAzeNHJ0hH2rFs4RA",
						"Content-Type": "application/json",
					},
					method: "PUT",
					body: body,
				}
			)
			console.log(comments)
		} catch (error) {
			console.log("error", error)
		}
	}
	componentDidMount() {
		this.getComments()
	}

	componentDidUpdate() {
		this.getComments()
		this.state.deleted = false
	}

	handleComment = (event) => {
		let comment = event.target.value
		this.setState({ comment })
	}

	render() {
		return (
			<>
				<ListGroup>
					{this.state.comments.map((comment) => {
						//console.log(comment)
						return (
							<Comment
								key={comment._id}
								{...comment}
								deleteComment={this.deleteComment}
								editComment={this.editComment}
							/>
						)
					})}
				</ListGroup>
				<Form type="Submit" onSubmit={this.addComment}>
					<input
						type="Text"
						onChange={this.handleComment}
						value={this.state.comment}
					></input>
					<Button variant="dark" type="submit">
						send
					</Button>
				</Form>
			</>
		)
	}
}

export default Comments
