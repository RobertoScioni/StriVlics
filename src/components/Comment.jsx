import React from "react"
import { ListGroupItem, Button } from "react-bootstrap"
//() => props.editComment(props._id)

//const Comment = (props) => {

class Comment extends React.Component {
	constructor(props) {
		super(props)
		this.state = { form: false, comment: props.comment, id: props._id }
		console.log(this.state)
	}
	toggleForm = () => {
		this.setState({ form: !this.state.form })
		this.setState({ comment: this.props.comment })
	}
	handleEdit = (event) => {
		console.log(event.target.value)
		this.setState({ comment: event.target.value })
	}
	render(props) {
		if (this.state.form) {
			return (
				<ListGroupItem key={this.state.id} variant="dark">
					<input
						type="text"
						value={this.state.comment}
						onChange={this.handleEdit}
					/>
					<Button
						variant="danger"
						onClick={(event) => {
							event.preventDefault()
							this.props.editComment(this.state.id, this.state.comment)
						}}
					>
						SEND
					</Button>
					<Button variant="danger" onClick={this.toggleForm}>
						CANCEL
					</Button>
				</ListGroupItem>
			)
		} else {
			return (
				<ListGroupItem key={this.state.id} variant="dark">
					<p>{this.state.comment}</p>
					<Button
						id={this.state.id}
						variant="danger"
						onClick={this.props.deleteComment}
					>
						DELETE
					</Button>
					<Button variant="danger" onClick={this.toggleForm}>
						EDIT
					</Button>
				</ListGroupItem>
			)
		}
	}
}

export default Comment
