import React from 'react';
import './Items.css';

class Items extends React.Component {
  render () {
    const { details } = this.props;
    return (
      <li className="Items col-md-3">
        <img className="item-img" src={details.itemImage} alt={details.itemName}/>
        <h4 className="item-name">
          {details.itemName}
        </h4>
        <button className="btn btn-success">Add to My Stuff</button>
      </li>
    );
  }
}

export default Items;
