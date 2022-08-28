import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Footer extends React.Component {
    render() {
        return (
            <Card className="text-center">
      <Card.Header style={{backgroundColor:"yellow"}}>Thank you for your time</Card.Header>
      <Card.Body style={{backgroundColor:"grey"}}>
        <Card.Title >Lab 6</Card.Title>
        <Card.Text>
          Tareq Zoubii - Mohammad Alfayoume.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted" style={{backgroundColor:"yellow"}}>Copy Rights &copy 2022</Card.Footer>
    </Card>
        )
    }
    
}
export default Footer;