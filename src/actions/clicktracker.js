/**
 * this is a list of actions associated with a given component
 * or functionality of the aplication - the strings must be
 * unique on an application level!
 */

const actions = {
  increment: "clicktracker/increment"
};

/**
 * this is an action creator; it will take some data, process it, and
 * return an action - all actions passed to dispatch() must be plain
 * objects */
function incrementAction() {
  return {
    type: actions.increment
  }
};

/**
 * we are exporting actions and action creators so we can call them in
 * our components and when creating Containers/Smart components
 */
export {
  actions,
  incrementAction
}