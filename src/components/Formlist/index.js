import React, { Component } from "react";
import "./formlist.scss";

class FromList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeStock = event => {
    const name = event.target.name;
    const value = event.target.value;
    var stateCopy = Object.assign({}, this.props);
    //stateCopy.items[key].upVotes += 1;
    this.setState(stateCopy);
    // this.setState(name : value);
    console.log(this.state);
  };

  generateCard = x => {
    return (
      <li className="table-row" key={x.ItemID}>
        <div className="col col-1" data-label="Item Code">
          {x.ItemID}
        </div>
        <div className="col col-2" data-label="Item Name">
          {x.ItemName}
        </div>
        <div className="col col-3" data-label="Instock">
          0
        </div>
        <div className="col col-4" data-label="Quantity">
          <input
            type="number"
            min="0"
            max="100"
            name={x.ItemID + "Stock"}
            onChange={this.handleChangeStock}
          />
        </div>
        <div className="col col-5" data-label="Price">
          £{x.Price}
        </div>
        <div className="col col-5" data-label="End Date">
          {x.Price * 2}
        </div>
      </li>
    );
  };

  render() {
    return (
      <div className="main form-text">
        <div className="tableContainer">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Item Code</div>
              <div className="col col-2">Item Name</div>
              <div className="col col-3">Instock</div>
              <div className="col col-4">Quantity</div>
              <div className="col col-5">Price</div>
              <div className="col col-6">End Date</div>
            </li>
            {this.props.itemList
              ? this.props.itemList.map(x => this.generateCard(x))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default FromList;
