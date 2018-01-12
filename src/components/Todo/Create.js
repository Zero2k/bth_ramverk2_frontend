import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'semantic-ui-react';


const Root = styled.div`
  padding-top: 10px;
`;

const AddTodo = ({ updateState }) => (
  <Root>
    <Form>
      <Form.Group widths='equal'>
        <Form.Field>
          <Input
            onChange={updateState}
            name="title"
            fluid
            placeholder="Title"
          />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <Input
          onChange={updateState}
          name="text"
          fluid
          placeholder="text"
        />
      </Form.Field>
      <Form.Field id='form-button-control-public' control={Button} content='Add' />
    </Form>
  </Root>
);

export default AddTodo;
