import React from 'react';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
    };
  }

  render() {
    return (
      <div>
        <form className="order">
          <select className="sort">
            <option value="relevant">Most relevant</option>
            <option value="recent">Most recent</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Order;
