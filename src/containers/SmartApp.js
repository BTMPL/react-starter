/**
 * this file transforms our dumb component into a smart component / container
 */

import React from "react";
import { connect } from "react-redux";

import App from "../components/App";
import { getNewItem } from "../actions/item.js";


function mapStatesToProps(store) {
  return {
    items: store.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: function() {
      dispatch(getNewItem())
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);
