import React from 'react';
import { Card, Row, Col, CardTitle, CardText, FormGroup, Label, Input } from 'reactstrap';

const DescriptionArea = () => {
  return (
    <>
    <Row>
      <Col md={10}>
        <Card body>
          <CardTitle><h5>Подробная информация:</h5> </CardTitle>
          <CardText>Выбран пользователь <b>Matt Scott</b></CardText>
          <FormGroup row>
            <Label for="desc" sm={2}>Описание:</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="desc" />
            </Col>
          </FormGroup>
          <CardText>Адрес проживания: <b>Каштановая улица 8-222</b></CardText>
          <CardText>Город: <b>Москва</b></CardText>
          <CardText>Провинция/штат: <b>Ли уань</b></CardText>
          <CardText>Индекс: <b>452686</b></CardText>
        </Card>
      </Col>
    </Row>
    </>
  )
};

export default DescriptionArea;