/**
 * this is a reducer that will by default respond to actions defined
 * in actions/item, but it might aswell respond to actions
 * associated with different components
 */

import { actions } from "../actions/item";

/**
 * the reducer is a pure function - it will always return given value
 * when given a set input - it can not have any side-effects, so it can't
 * call a 3rd party component, that is not part of the reducer
 * so all the "heavy lifting" and computation needs to be done in actions
 */
const itemsReducer = function(state = { items: []}, action) {
  switch(action.type) {
    case actions.getNewItem:
      return {
        items: [...state.items, action.payload]
      }

    default:
      return state;
  }
}

export default itemsReducer;