import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

class MyNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleEvent = (e) => {
    this.setState({ query: e.target.value });
  };

  getData = async () => {
    const key = "&apikey=c4555b36";

    try {
      let response = await fetch(`http://www.omdbapi.com/?s=lord${key}`, {
        method: "GET",
      });

      response = await response.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Navbar variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={require("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png")}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleEvent}
            />
            <Button variant="outline-success" onClick={this.getData}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavBar;
