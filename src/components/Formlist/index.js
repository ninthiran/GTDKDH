import React, { Component } from "react";
import "./formlist.css";

class FromList extends Component {
  constructor(props) {
    super();
    this.state = {
      itemList: [],
      count: 0,
      instock: 0,
      delivery: 0,
      endstock: 0
    };
  }

  handleChangeStock = () => {
    this.setState({ instock: this.state.instock + 1 });
  };

  generateCard = x => {
    return (
      <div key={x.ItemID}>
        <input
          type="checkbox"
          name="pasta"
          id={x.ItemID}
          className="checkbox-input"
        />
        <label htmlFor={x.ItemID} className="checkbox-label label">
          <div className="checkbox-text">
            <p className="checkbox-text--title">
              {x.ItemName} | £{x.Price}
            </p>
            <div className="checkbox-text--descripxtion">
              <div className="checkbox-textlayout">
                <label className="shortlabel">In Stock </label>
                <input
                  className="formlist"
                  onChange={this.handleChangeStock}
                  type="number"
                  min="1"
                  max="100"
                  value={this.state.instock}
                />
              </div>
              <div className="checkbox-textlayout">
                <label className="shortlabel">Delivery </label>
                <input
                  className="formlist"
                  type="number"
                  min="1"
                  max="100"
                  value={this.state.delivery}
                />
              </div>
              <div className="checkbox-textlayout">
                <label className="shortlabel">End Stock </label>
                <input
                  className="formlist"
                  type="number"
                  min="1"
                  max="100"
                  value={this.state.endstock}
                />
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  };

  render() {
    return (
      <div className="main form-text">
        {this.props.itemList
          ? this.props.itemList.map(x => this.generateCard(x))
          : null}
      </div>
    );
  }
}

export default FromList;
