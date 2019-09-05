export default function updateState(state, action) {
  if (action === 'inc') {
    return state + 1;
  } else if (action === 'dec') {
    return state - 1;
  } else {
    return state;
  };
}
