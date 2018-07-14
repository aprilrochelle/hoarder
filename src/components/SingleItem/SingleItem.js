import React from 'react';
import myItems from '../../firebaseReq/myItems';
import './SingleItem.css';

class SingleItem extends React.Component {
  deleteItemClick = () => {
    const firebaseId = this.props.match.params.id;
    myItems
      .deleteRequest(firebaseId)
      .then(() => {
        this.props.history.push('/mystuff');
      })
      .catch((err) => {
        console.error('error with delete request', err);
      });
  }
  render () {
    return (
      <div className="SingleItem col-xs-12">
        <h1>Single Item</h1>
        <button className="btn btn-danger" onClick={this.deleteItemClick}>Don't Want It</button>
      </div>
    );
  }
}

export default SingleItem;
