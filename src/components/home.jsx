import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Gallery from "./Gallery"
import MyNavBar from "./MyNavBar"
class Home extends React.Component {
	constructor(props) {
		super(props)
		console.log(props)
	}
	render(props) {
		return (
			<>
				<MyNavBar />
				<Gallery search="" type="" history={this.props.history} />
				<Gallery search="fast and furious" type="" />
				<Gallery search="the office" type="" />
			</>
		)
	}
}

export default Home
