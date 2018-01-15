import React from 'react';
import styled from 'styled-components';
import { Form, Button, Checkbox } from 'semantic-ui-react';


const Root = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const EditTodo = ({ data, updateState }) => (
  <Root>
    <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder='Enter title' name="title" value={data.title} onChange={updateState} />
      </Form.Field>
      <Form.Field>
        <label>Text</label>
        <input placeholder='Enter text' name="text" value={data.text} onChange={updateState} />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Completed' checked={data.active} onClick={this.setCompleted} />
      </Form.Field>
      <Button type='submit'>Save</Button>
    </Form>
  </Root>
);

export default EditTodo;
