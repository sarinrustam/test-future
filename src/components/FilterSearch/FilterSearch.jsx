import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Input, Label, FormGroup } from 'reactstrap';

const FilterSearch = () => {
  return (
    <div>
      <Button color='secondary' id='toggler' style={{ marginBottom: "5px" }}>Фильтр</Button>
      <UncontrolledCollapse toggler='#toggler'>
        <Card>
          <CardBody>
            <FormGroup>
              <Label hidden for='searchText'>Введите текст</Label>
              <Input id='searchText' name='searchText' type='search' placeholder='Введите поле поиска'/>
            </FormGroup>
            <Button outline color='secondary'>Найти</Button>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default FilterSearch;