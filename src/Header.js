import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {
    render() {
        return (
            <Card className="text-center">
      <Card.Header style={{backgroundColor:"teal"}}>Welcome To our React Application</Card.Header>
      <Card.Body style={{backgroundColor:"#e0ffff"}}>
        <Card.Title>Third Party API</Card.Title>
        <Card.Text>
          In today Lab we will Create an application for Location.
        </Card.Text>
      </Card.Body>
    </Card>
        )
    }
    
}
export default Header;