import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/users/users';

class UserForm extends React.PureComponent {
  constructor(props) {
    super();

    this.state = {
      isButtonDisabled: false,
    };

    this.handleDidableButton = this.handleDidableButton.bind(this);
  }

  handleDidableButton() {
    this.setState({
      isButtonDisabled: true
    })
  }

  render() {
    let initialValues = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          this.handleDidableButton();
          this.props.addNewData({
            address: {
              streetAddress: "",
              city: "",
              state: "",
              zip: ""
            },
            description: "",
            email: values.email,
            firstName: values.firstName,
            id: 0,
            lastName: values.lastName,
            phone: values.phone,
          });
          this.props.onClose();
        }}
      >
        {formik => (
          <Form
            onSubmit={formik.handleSubmit}
          >
            <Row form>
              <Col md={2}>
                <FormGroup>
                  <Label for='idNumber'>Id</Label>
                  <Input
                    id='idNumber'
                    type='text'
                    name='id'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for='firstName'>Firtsname</Label>
                  <Input
                    id='firstName'
                    type='text'
                    name='firstName'
                    placeholder='Введите имя'
                    onChange={formik.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for='lastName'>Lastsname</Label>
                  <Input
                    id='lastName'
                    type='text'
                    name='lastName'
                    placeholder='Введите фамилию'
                    onChange={formik.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Введите email'
                    onChange={formik.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='phone'>Phone</Label>
                  <Input
                    id='phone'
                    type='tel'
                    name='phone'
                    placeholder='Введите email'
                    onChange={formik.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button
              color='secondary'
              type='submit'
              disabled={formik.values.id === '' || !formik.values.firstName || !formik.values.lastName || !formik.values.email || !formik.values.phone || this.state.isButtonDisabled}
            >
              Добавить пользователя
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = {
  addNewData: ActionCreator.addNewData,
};

export default connect(null, mapDispatchToProps)(UserForm);