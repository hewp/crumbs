import { Button, Modal, FormControl } from 'react-bootstrap';

var style = {
  margin: 'auto auto',
  height: '100%',
}

export class OutOfChatRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      romnameText: ''
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRoomTextChange = this.handleRoomTextChange.bind(this);
  }

  openModal() {
    this.setState({
      show: true
    })
  }

  closeModal() {
    this.props.createChatRoom(this.state.roomnameText);
    this.setState({
      show: false
    })
  }

  handleRoomTextChange(e) {
    this.setState({
      roomnameText: e.target.value
    });
  }

  render() {
    return (
      <div style={style}>
        <h2>you are not in a Chatroom!</h2>
        <br />
        <p>create a chatroom at this spot to start a thread. Leave a message for someone else to find later!</p>
        <br />
        <Button bsStyle="primary" onClick={this.openModal}>Create a new Chatroom!</Button>

        <Modal show={this.state.show} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Enter Chatroom Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              type="text"
              placeholder="Enter Chatroom Name"
              onChange={this.handleRoomTextChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.closeModal}>Submit</Button>
          </Modal.Footer>
        </Modal>
        <br />
        <br />
      </div>
    )
  }
}



// export let OutOfChatRoom = ({createChatRoom}) => (
//   <div style={style}>
//     <h2>you are not in a Chatroom!</h2>
//     <br />
//     <p>create a chatroom at this spot to start a thread. Leave a message for someone else to find later!</p>
//     <br />
//     <Button bsStyle="primary" onClick={createChatRoom}>Create a new Chatroom!</Button>
//     <br />
//     <br />
//   </div>
// )