import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';
import AddRowButton from '../AddRowButton/AddRowButton.jsx';
import CustomTable from '../CustomTable/CustomTable.jsx';
import DescriptionArea from '../DescriptionArea/DescriptionArea.jsx';
import FilterSearch from '../FilterSearch/FilterSearch.jsx';
import PaginationMenu from '../PaginationMenu/PaginationMenu.jsx';
import UserForm from '../UserForm/UserForm.jsx';
import { MAX_USERS_ITEMS, SortDirections, tableHeaders } from '../../utils/utils';
import {
  getUsersDataLoading,
  getUsersDataError,
  getUsersDataCount,
  getPaginations,
  getCurrentPage,
  getSortedByName,
  getSortedByDirection,
  getSortedUsersData,
} from '../../reducer/users/selectors';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';
import { ActionCreator } from '../../reducer/users/users';


class Main extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      isModalOpen: false,
      activeItem: null,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleActiveItem = this.handleActiveItem.bind(this);
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
    this.handleTableHeaderClick = this.handleTableHeaderClick.bind(this);
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

  handleSetCurrentPage(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    this.setState({
      activeItem: null,
    });
  }

  handleTableHeaderClick(header) {
    if (header === this.props.sortedByName) {
      console.log(this.props.sortedByDirection, 'sss')
      if (this.props.sortedByDirection === SortDirections.UP) {
        this.props.setSortedByDirection(SortDirections.DOWN);
      }

      if (this.props.sortedByDirection === SortDirections.DOWN) {
        this.props.setSortedByDirection(null);
      }

      if (!this.props.sortedByDirection) {
        this.props.setSortedByDirection(SortDirections.UP);
      }
    } else {
      this.props.setSortedByDirection(SortDirections.UP);
    }
    this.props.setSortedByName(header);
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
    const { userDataLoading, userDataError, usersDataByPage, sortedByName, sortedByDirection } = this.props;

    if (userDataLoading) {
      return <Spinner color='secondary'/>
    }

    if (userDataError) {
      return <p style={{color: 'red'}}>При загрузке данных произошла ошибка</p>
    }

    return (
      <CustomTable
        tableHeaderClick={this.handleTableHeaderClick}
        sortedByName={sortedByName}
        sortedByDirection={sortedByDirection}
        headers={tableHeaders}
        setActiveItem={this.handleActiveItem}
        data={usersDataByPage}
      />
    )
  }

  renderPagination() {
    if (this.props.paginationArray.length > 1) {
      return <PaginationMenu currentPage={this.props.currentPage} setCurrentPage={this.handleSetCurrentPage} paginations={this.props.paginationArray} />
    }
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
      {this.renderPagination()}
      {this.renderDetailsBlock()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const userDataLoading = getUsersDataLoading(state);
  const userDataError = getUsersDataError(state);
  const usersDataCount = getUsersDataCount(state);
  const paginationArray = getPaginations(state);
  const currentPage = getCurrentPage(state);
  const sortedByName = getSortedByName(state);
  const sortedByDirection = getSortedByDirection(state);
  const sortedUsersData = getSortedUsersData(state);
  const usersDataByPage = sortedUsersData.slice(MAX_USERS_ITEMS * (currentPage - 1), MAX_USERS_ITEMS * currentPage);

  return {
    userDataLoading,
    userDataError,
    usersDataByPage,
    usersDataCount,
    paginationArray,
    currentPage,
    sortedByName,
    sortedByDirection,
    getSortedUsersData,
  };
};

const mapDispatchToProps = {
  setCurrentPage: ActionCreator.setCurrentPage,
  setSortedByName: ActionCreator.setSortedByName,
  setSortedByDirection: ActionCreator.setSortedByDirection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);