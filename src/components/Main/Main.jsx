import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Spinner, Button } from 'reactstrap';
import CustomTable from '../CustomTable/CustomTable.jsx';
import DescriptionArea from '../DescriptionArea/DescriptionArea.jsx';
import FilterSearch from '../FilterSearch/FilterSearch.jsx';
import PaginationMenu from '../PaginationMenu/PaginationMenu.jsx';
import UserForm from '../UserForm/UserForm.jsx';
import PropTypes from 'prop-types';
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

    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleActiveItem = this.handleActiveItem.bind(this);
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
    this.handleTableHeaderClick = this.handleTableHeaderClick.bind(this);
    this.handleSetFindPhrase = this.handleSetFindPhrase.bind(this);
  }

  handleToggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
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

  handleSetFindPhrase(phrase) {
    this.props.setFindPhrase(phrase);
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
      <Button 
        style={{marginBottom: "20px"}}
        outline 
        color='secondary'
        onClick={this.handleToggleModal}
      >
        Добавить поле
      </Button>
      <Modal 
       isOpen={this.state.isModalOpen}
       toggle={this.handleToggleModal}
      >
        <ModalHeader>Добавить пользователя</ModalHeader>
        <ModalBody>
          <UserForm 
            onClose={this.handleToggleModal}
          />
        </ModalBody>
      </Modal>
      <FilterSearch
        changeFilter={this.handleSetFindPhrase}
      />
      {this.renderCustomTable()}
      {this.renderPagination()}
      {this.renderDetailsBlock()}
      </>
    );
  }
}

Main.propTypes = {
  userDataLoading: PropTypes.bool.isRequired,
  userDataError: PropTypes.bool.isRequired,
  usersDataCount: PropTypes.number,
  usersDataByPage: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  paginationArray: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  sortedByName: PropTypes.string,
  sortedByDirection: PropTypes.string,
  getSortedUsersData: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setSortedByName: PropTypes.func.isRequired,
  setSortedByDirection: PropTypes.func.isRequired,
  setFindPhrase: PropTypes.func.isRequired,
};

Main.defaultProps = {
  usersDataCount: PropTypes.null,
  sortedByName: PropTypes.null,
  sortedByDirection: PropTypes.null,
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
    getSortedUsersData
  };
};

const mapDispatchToProps = {
  setCurrentPage: ActionCreator.setCurrentPage,
  setSortedByName: ActionCreator.setSortedByName,
  setSortedByDirection: ActionCreator.setSortedByDirection,
  setFindPhrase: ActionCreator.setFindPhrase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);