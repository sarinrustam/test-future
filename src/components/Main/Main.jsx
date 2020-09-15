import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';
import AddRowButton from '../AddRowButton/AddRowButton.jsx';
import CustomTable from '../CustomTable/CustomTable.jsx';
import DescriptionArea from '../DescriptionArea/DescriptionArea.jsx';
import FilterSearch from '../FilterSearch/FilterSearch.jsx';
import PaginationMenu from '../PaginationMenu/PaginationMenu.jsx';
import UserForm from '../UserForm/UserForm.jsx';
import { getUsersDataLoading, getUsersDataError, getUsersData, getUsersDataCount } from '../../reducer/users/selectors';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';


class Main extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      isModalOpen: false,
      activeItem: null,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleActiveItem = this.handleActiveItem.bind(this);
  }

  handleCloseModal() {
    this.setState({
      isModalOpen: true,
    })
  }

  handleActiveItem(item) {
    console.log(item);
    this.setState({
      activeItem: item,
    })
  }

  renderDetailsBlock() {
    if (this.state.activeItem) {
      return (
        <DescriptionArea
          userData={this.state.activeItem}
        />
      )
    }
  }

  renderCustomTable() {
    const { userDataLoading, userDataError, usersData } = this.props;

    if (userDataLoading) {
      return <Spinner color='secondary'/>
    }

    if (userDataError) {
      return <p style={{color: 'red'}}>При загрузке данных произошла ошибка</p>
    }

    return <CustomTable setActiveItem={this.handleActiveItem} data={usersData} />
  }

  render() {
    const { usersDataCount } = this.props;
    if (!usersDataCount) {
      return <WelcomeScreen/> 
    }
    return (
      <>
      <AddRowButton/>
      <Modal 
        isOpen={this.state.isModalOpen}
        toggle={this.handleCloseModal}
      >
        <ModalHeader>Добавить пользователя</ModalHeader>
        <ModalBody>
          <UserForm/>
        </ModalBody>
      </Modal>
      <FilterSearch/>
      {this.renderCustomTable()}
      <PaginationMenu />
      {this.renderDetailsBlock()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const userDataLoading = getUsersDataLoading(state);
  const userDataError = getUsersDataError(state);
  const usersData = getUsersData(state);
  const usersDataCount = getUsersDataCount(state);

  return {
    userDataLoading,
    userDataError,
    usersData,
    usersDataCount,
  };
};

export default connect(mapStateToProps, null)(Main);