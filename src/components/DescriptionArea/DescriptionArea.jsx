import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, CardTitle, CardText, FormGroup, Label, Input } from 'reactstrap';

const DescriptionArea = (props) => {
  const {firstName, lastName, description, address} = props.userData;
  return (
    <>
    <Row>
      <Col md={10}>
        <Card body>
          <CardTitle><h5>Подробная информация:</h5></CardTitle>
          <CardText>Выбран пользователь <b>{firstName} {lastName}</b></CardText>
          <FormGroup row>
            <Label sm={2}>Описание:</Label>
            <Col sm={7}>
              <p>{description}</p>
            </Col>
          </FormGroup>
          <CardText>Адрес проживания: <b>{address.streetAddress}</b></CardText>
          <CardText>Город: <b>{address.city}</b></CardText>
          <CardText>Провинция/штат: <b>{address.state}</b></CardText>
          <CardText>Индекс: <b>{address.zip}</b></CardText>
        </Card>
      </Col>
    </Row>
    </>
  )
};

DescriptionArea.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.shape({
      streetAddress: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DescriptionArea;