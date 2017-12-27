import React from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import { Input, Button, Form, TextArea } from 'semantic-ui-react';

import Chat from '../components/Chat';

const socket = io('localhost:8080');

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: 
    "chat";
`;

class Socket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      message: '',
      messages: [],
    };

    this.sendMessage = (e) => {
      e.preventDefault();
      socket.emit('send message', {
        id: socket.id,
        user: this.state.username,
        message: this.state.message,
        date: new Date().toDateString(),
      });
      this.setState({ message: '' });
    };

    const addMessage = (data) => {
      this.setState({ messages: [...this.state.messages, data] });
    };

    socket.on('recive message', function(data) {
      addMessage(data);
    });
  }

  render() {
    return (
      <Root>
        <Chat messages={this.state.messages} />
        <Form onSubmit={this.sendMessage}>
          <Form.Field id='form-input-control-first-name' control={Input} value={this.state.username} onChange={e => this.setState({ username: e.target.value })} label='Username' placeholder='Username' />
          <Form.Field id='form-textarea-control-opinion' control={TextArea} value={this.state.message} onChange={e => this.setState({ message: e.target.value })} label='Message' placeholder='Message' />
          <Form.Field id='form-button-control-public' control={Button} content='Send' />
        </Form>
      </Root>
    );
  }
}

export default Socket;
