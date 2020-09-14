import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddRowButton from '../AddRowButton/AddRowButton.jsx';
import CustomTable from '../CustomTable/CustomTable.jsx';
import DescriptionArea from '../DescriptionArea/DescriptionArea.jsx';
import FilterSearch from '../FilterSearch/FilterSearch.jsx';
import PaginationMenu from '../PaginationMenu/PaginationMenu.jsx';
import UserForm from '../UserForm/UserForm.jsx';

const App = () => {
  return (
    <>
    <AddRowButton/>
    <Modal isOpen={false}>
      <ModalHeader>Добавить пользователя</ModalHeader>
      <ModalBody>
        <UserForm/>
      </ModalBody>
    </Modal>
    <FilterSearch/>
    <CustomTable/>
    <PaginationMenu />
    <DescriptionArea/>
    </>
  );
}

export default App;