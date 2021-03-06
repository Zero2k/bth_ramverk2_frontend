import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const Root = styled.div``;

const RegisterForm = () => (
  <Root>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/favicon.ico' />
          {' '}Create your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>Sign Up</Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to='/login'>Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </Root>
);

export default RegisterForm;
