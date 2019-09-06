export const createStore = (reducer, initialState) => {
  let state = initialState || {};
  let cbs = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    cbs.forEach(cb => cb());
  }

  const getState = () => state;

  const subscribe = (fn) => {
    cbs.push(fn);
    return () => cbs = cbs.filter(cb => cb !== fn);
  }

  return { getState, dispatch, subscribe }
}
