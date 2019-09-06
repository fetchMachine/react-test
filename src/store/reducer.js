function updateState(state, { type, value = 1 } = {}) {
  const { count } = state;
  const actions = {
    inc: () => Object.assign({}, state, { count: count + value }),
    dec: () => Object.assign({}, state, { count: count - value }),
    reset: () => Object.assign({}, state, { count: 0 }),
  };
  return actions[type] ? actions[type]() : state;
}

export default updateState;
