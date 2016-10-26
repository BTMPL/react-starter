/**
 * this file transforms our dumb component into a smart component / container
 */

import React from "react";
import { connect } from "react-redux";

import App from "../components/App";
import { incrementAction } from "../actions/clicktracker.js";

function mapStatesToProps(store) {
  return {
    timesButtonPressed: store.timesButtonPressed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: function() {
      dispatch(incrementAction())
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);
