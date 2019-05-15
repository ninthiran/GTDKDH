import React, { Component } from "react";
import "./sidebar.css";
import api from "../../services/ClientDataServices";

class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = { records: [] };
  }

  componentDidMount = () => {
    api.getData("category").then(res => {
      const records = res.data.records;
      this.setState({ records });
    });
  };

  categoryList = x => {
    return (
      <span
        id={x.ItemCategoryID}
        key={x.ItemCategoryID}
        onClick={this.props.callbackUserFeed}
      >
        {x.ItemName}
      </span>
    );
  };
  render() {
    return (
      <div className="sidenav">
        {this.state.records.map(x => this.categoryList(x))}
      </div>
    );
  }
}

export default Sidebar;
