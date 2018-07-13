import React from 'react';

import itemRequests from '../../firebaseReq/items';
import './AllStuff.css';

class AllStuff extends React.Component {
  state = {
    items: [],
  }

  componentDidMount () {
    itemRequests
      .getAllStuff()
      .then((items) => {
        this.setState({items});
      })
      .catch((err) => {
        console.error('error with fish get request', err);
      });
  }

  render () {
    const itemComponents = this.state.items.map((item) => {
      return (
        <li>
          <div className="col-md-3">
            <h4>{item.itemName}</h4>
          </div>
        </li>
      );
    });

    return (
      <div className="AllStuff col-xs-12">
        <h1>All Stuff</h1>
        <ul className="item-list">
          {itemComponents}
        </ul>
      </div>
    );
  }
}

export default AllStuff;
