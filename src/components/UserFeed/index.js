import React, { Component } from "react";
import Sidebar from "../Sidebar";
import Formlist from "../Formlist";
import { getItemListData } from "../../services/ClientDataServices";

class UserFeed extends Component {
  state = {};

  categoryGetter = categoryName => {
    const categoryID = categoryName.target.id;

    this.setState({ categoryID });
    if (categoryID != null)
      getItemListData("itemslist", categoryID).then(res => {
        const itemList = res.data.records;

        this.setState({ itemList });
      });
  };

  render() {
    return (
      <>
        <Sidebar callbackUserFeed={this.categoryGetter} />
        <Formlist itemList={this.state.itemList} />
      </>
    );
  }
}

export default UserFeed;
