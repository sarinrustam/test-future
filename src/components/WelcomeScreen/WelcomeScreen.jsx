import React from 'react';
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

const mapDispatchToProps = {
  setUsersDataCount: ActionCreator.setUsersDataCount,
  loadUsersData: UsersOperation.loadUsersData,
};

export default connect(null, mapDispatchToProps)(WelcomeScreen);