import React from 'react';

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  handleInputChange (e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit () {
    this.props.addMessageToChatRoom(this.state.message);
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <p>You are in chatroom <strong>{this.props.roomname}</strong> </p>
          <ControlLabel>Add a message </ControlLabel>
          <FormControl
            type="text"
            value={this.state.message}
            placeholder="Enter text"
            onChange={this.handleInputChange.bind(this)}
          />
          <br/>
          <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Add message</Button>
        </FormGroup>
      </form>
    )
  }
}

