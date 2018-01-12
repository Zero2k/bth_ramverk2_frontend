import React from 'react';
import styled from 'styled-components';
import { Comment } from 'semantic-ui-react';

const Root = styled.div`
  padding: 15px 10px 10px 15px;
  margin-bottom: 20px;
  background-color: #fff;
  height: 500px;
  border: 1px solid #d4d4d5;
  overflow-y: auto;
  grid-area: chat;
`;

const Chat = ({ messages }) => (
  <Root>
    <Comment.Group>
      {messages.map((message) => {
        return (
          <Comment key={message.id}>
            <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/molly.png' />
            <Comment.Content>
              <Comment.Author as='a'>{message.user}</Comment.Author>
              <Comment.Metadata>
                <div>{message.date}</div>
              </Comment.Metadata>
              <Comment.Text>{message.message}</Comment.Text>
            </Comment.Content>
          </Comment>
        );
      })}
    </Comment.Group>
  </Root>
);

export default Chat;
