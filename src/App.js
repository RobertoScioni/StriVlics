import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./style.css"
import Home from "./components/home"
import ShowDetail from "./components/ShowDetail"
import { BrowserRouter as Router, Route } from "react-router-dom"
class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Route path="/" exact render={(props) => <Home {...props} />} />
					<Route path="/details/:id" component={ShowDetail} />
				</Router>
			</>
		)
	}
}

export default App
