import React from 'react';
import {Button} from 'react-bootstrap';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <Button
            style={{cursor: 'pointer'}} 
            onClick={this.props.logIn} 
            bsStyle="link"> 
            Already have an account? 
          </Button>
          <Button
            style={{cursor: 'pointer'}} 
            onClick={this.props.validateUserSignup.bind(this)}
            bsStyle="primary"> 
            Sign Up 
          </Button>
        </form>
      </div>
    )
  }
}