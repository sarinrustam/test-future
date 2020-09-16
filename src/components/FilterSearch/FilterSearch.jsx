import React from 'react';
import PropTypes from 'prop-types';
import { Button, CardBody, Card, Input, Label, FormGroup, Row } from 'reactstrap';

class FilterSearch extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      findValue: '',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleChangeInput(e) {
    const value = e.target.value;
    this.setState({
      findValue: value,
    });
  }

  handleButtonClick() {
    this.props.changeFilter(this.state.findValue)
  };

  render() {
    return (
      <div style={{marginBottom: "20px"}}>
        <Card>
          <CardBody>
            <FormGroup>
              <Label hidden for='searchText'>Введите текст</Label>
              <Input
                id='searchText'
                name='searchText'
                type='search'
                placeholder='Введите поле поиска'
                onChange={this.handleChangeInput}
              />
            </FormGroup>
            <Button
              outline
              color='secondary'
              onClick={this.handleButtonClick}
            >
              Найти
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
};

FilterSearch.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default FilterSearch;