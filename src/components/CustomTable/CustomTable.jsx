import React from 'react';
import { Table } from 'reactstrap';

class CustomTable extends React.PureComponent {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Otto</td>
            <td>Rihagel</td>
            <td>Pipka@gmail.com</td>
            <td>8-919-222-22-22</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Otto2</td>
            <td>Rihagel</td>
            <td>Pipka@gmail.com</td>
            <td>8-919-222-22-22</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Otto3</td>
            <td>Rihagel</td>
            <td>Pipka@gmail.com</td>
            <td>8-919-222-22-22</td>
          </tr>
        </tbody>
      </Table>
    );
  }
};

export default CustomTable;