function updateState(state, { action, value } = {}) {
  // чистейшая функция, которая ничего не изменяет во вне
  if (action === 'inc') {
    return state + value;
  } else if (action === 'dec') {
    return state - value;
  } else {
    return state;
  };
}


const counter = document.body.querySelector('#counter');

const inc = { action: 'inc', value: 1 }
const dec = { action: 'dec', value: 1 }

document.body.querySelector('#btn-inc').addEventListener('click',
() => {
  const state = parseInt(counter.textContent);
  const newState = updateState(state, inc);
  counter.textContent = newState;
});


document.body.querySelector('#btn-dec').addEventListener('click',
() => {
  const state = parseInt(counter.textContent);
  const newState = updateState(state, dec);
  counter.textContent = newState;
});

