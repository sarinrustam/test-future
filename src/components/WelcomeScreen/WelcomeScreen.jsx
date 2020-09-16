import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { ActionCreator, Operation as UsersOperation } from '../../reducer/users/users';
import { SMALL_DATA, BIG_DATA } from '../../utils/utils';

const WelcomeScreen = (props) => {
  const handleClickSmallData = () => {
    props.setUsersDataCount(SMALL_DATA);
    props.loadUsersData();
  };

  const handleClickBigData = () => {
    props.setUsersDataCount(BIG_DATA);
    props.loadUsersData();
  };

  return (
    <Jumbotron>
      <h2>Выберите какой обьем данных отобразить в таблице: </h2>
      <hr/>
      <Button
        style={{marginRight: "10px"}}
        onClick={handleClickSmallData}
        outline
        color='secondary'
      >
        Маленький
      </Button>
      <Button
        onClick={handleClickBigData}
        outline
        color='primary'
      >
        Большой
      </Button>
    </Jumbotron>
  );
};

WelcomeScreen.propTypes = {
  setUsersDataCount: PropTypes.func.isRequired,
  loadUsersData: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setUsersDataCount: ActionCreator.setUsersDataCount,
  loadUsersData: UsersOperation.loadUsersData,
};

export default connect(null, mapDispatchToProps)(WelcomeScreen);