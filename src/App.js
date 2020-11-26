import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./style.css"
import Home from "./components/home"
import ShowDetail from "./components/ShowDetail"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Register from "./components/Registration"
import MyNavBar from "./components/MyNavBar"
class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Route
						path="/"
						exact
						render={(props) => <Home title="HOME" {...props} />}
					/>
					<Route path="/details/:id" component={ShowDetail} />
					<Route path="/Register" exact component={Register} />
				</Router>
			</>
		)
	}
}

export default App
