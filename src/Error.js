import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

class Error extends React.Component {
   closing = () => {
    this.props.error()
   }
   

    render() {
        return (
            <div>
            <Alert variant="danger" 
            onClose  = {this.closing} 
            dismissible>
        <Alert.Heading>Oh No! You got an error!</Alert.Heading>
        <p>
        💢💢💢Something Wrong Happend!!!💢💢💢
        <p>check your URL</p>
        </p>
      </Alert>
      </div>
        )
    }
}
export default Error;