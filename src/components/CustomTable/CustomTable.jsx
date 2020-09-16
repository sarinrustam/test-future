import React from 'react';
import { Table } from 'reactstrap';
import { SortDirections } from '../../utils/utils';

class CustomTable extends React.PureComponent {
  constructor(props) {
    super();
  }



  render() {
    const { data, setActiveItem, headers, sortedByName, sortedByDirection, tableHeaderClick } = this.props;

    return (
      <Table hover>
        <thead>
          <tr>
            {headers.map((item) => (
              <th
                key={item}
                onClick={() => tableHeaderClick(item)}
              >
                {item}
                <div style={{display: "inline-flex", flexDirection: "column", position: "relative", top: "-5px", left: "5px"}}>
                  <svg style={{opacity: `${sortedByDirection === SortDirections.UP && sortedByName === item ? "100%" : "20%"}`}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" x="0px" y="0px" viewBox="0 0 256 256">
                      <polygon points="128,48.907 0,176.907 30.187,207.093 128,109.28 225.813,207.093 256,176.907"/>
                  </svg>
                  <svg style={{opacity: `${sortedByDirection === SortDirections.DOWN && sortedByName === item ? "100%" : "20%"}`}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" x="0px" y="0px" viewBox="0 0 256 256">
                    <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093" />
                  </svg>
                </div>
              </th>
            ))}
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
      </Table >
    );
  }
};

export default CustomTable;