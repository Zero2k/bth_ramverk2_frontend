import React from 'react';
import styled from 'styled-components';
import { Form, Button, Checkbox } from 'semantic-ui-react';


const Root = styled.div`
  padding-top: 10px;
`;

const EditTodo = ({
  data,
  updateState,
  onSubmit,
  setCompleted
}) => (
  <Root>
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Title</label>
        <input placeholder='Enter title' name="title" defaultValue={data.title} onChange={updateState} />
      </Form.Field>
      <Form.Field>
        <label>Text</label>
        <input placeholder='Enter text' name="text" defaultValue={data.text} onChange={updateState} />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Completed' defaultChecked={data.active} onClick={setCompleted} />
      </Form.Field>
      <Button type='submit'>Save</Button>
    </Form>
  </Root>
);

export default EditTodo;
