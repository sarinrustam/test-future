import React from 'react';
import { Table } from 'reactstrap';

class CustomTable extends React.PureComponent {
  constructor(props) {
    super();
  }
  render() {
    const { data, setActiveItem } = this.props;

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
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => {
                setActiveItem(item);
              }}
            >
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
};

export default CustomTable;