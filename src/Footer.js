import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Footer extends React.Component {
    render() {
        return (
            <Card className="text-center">
      <Card.Header style={{backgroundColor:"teal"}}>Thank you for your time</Card.Header>
      <Card.Body style={{backgroundColor:"white"}}>
        <Card.Title >Level 301 Week2</Card.Title>
        <Card.Text>
          Tareq Zoubii @2022
        </Card.Text>
      </Card.Body>
    </Card>
        )
    }
    
}
export default Footer;