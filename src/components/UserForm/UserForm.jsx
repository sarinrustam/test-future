import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

class UserForm extends React.Component {
  render() {
    return (
      <Form>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for='idNumber'>Id</Label>
              <Input id='idNumber' type='text' name='id' placeholder='' />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for='firstName'>Firtsname</Label>
              <Input id='firstName' type='text' name='firstname' placeholder='Введите имя' />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for='lastName'>Lastsname</Label>
              <Input id='lastName' type='text' name='lastname' placeholder='Введите фамилию' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input id='email' type='email' name='email' placeholder='Введите email'/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='phone'>Phone</Label>
              <Input id='phone' type='tel' name='phone' placeholder='Введите email'/>
            </FormGroup> 
          </Col>
        </Row>
        <Button color='secondary'>Добавить пользователя</Button>
      </Form>
    );
  }
}

export default UserForm;