/**
 * this is a store, it can hold many reducers and dispatching
 * an action against / on the store will make redux pass the action
 * to all of the reducers that were registerd with createStore()
 */

import { createStore } from "redux";

import clickTrackerReducer from "../reducers/clicktracker";

export default createStore(clickTrackerReducer);