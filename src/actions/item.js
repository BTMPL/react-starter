/**
 * this is a list of actions associated with a given component
 * or functionality of the aplication - the strings must be
 * unique on an application level!
 */

const actions = {
  getNewItem: "items/getNew"
};

/**
 * this is an action creator; it will take some data, process it, and
 * return an action - all actions passed to dispatch() must be plain
 * objects */
function getNewItem() {
  /*
  return {
    type: actions.getNewItem,
    payload: {
      name: "A random item",
      value: Math.ceil(Math.random() * 1000)
    }
  }
  */
  /**
   * with the introduction of a thunk we can now use async actions
   * instead of returning a plain JS object, we are returning
   * a function, that will be called by redux-thunk middleware
   * and passed the dispatch as a parameter - an action creator
   * does not have access to the dispatch method directly other than
   * accessing it via the global scope, which is a code smell
   */
  return function(dispatch) {
    /**
     * this is a simple promise that will evaluate to success
     * after 2 seconds; in your real-life examples this would be
     * replaced by an AJAX call or some other expensive computation
     * which would otherwise block the UI
     */
    (new Promise(function(res, rej) {
      setTimeout(res, 2000);
    }))
    .then(function() {
      dispatch({
        type: actions.getNewItem,
        payload: {
          name: "A random item",
          value: Math.ceil(Math.random() * 1000)
        }
      })
    });
  }
};

/**
 * we are exporting actions and action creators so we can call them in
 * our components and when creating Containers/Smart components
 */
export {
  actions,
  getNewItem
}