import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {
    render() {
        return (
            <Card className="text-center">
      <Card.Header style={{backgroundColor:"yellow"}}>Welcome To our React Application</Card.Header>
      <Card.Body style={{backgroundColor:"grey"}}>
        <Card.Title>Third Party API</Card.Title>
        <Card.Text>
          In today Lab we will Create an application for Location.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted" style={{backgroundColor:"yellow"}}>Sunday 28/8/2022</Card.Footer>
    </Card>
        )
    }
    
}
export default Header;