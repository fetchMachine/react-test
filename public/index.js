function updateState(state, { action, value } = {}) {
  // чистейшая функция, которая ничего не изменяет во вне
  const { count } = state;
  if (action === 'inc') {
    return Object.assign({}, state, { count: count + value });
  } else if (action === 'dec') {
    return Object.assign({}, state, { count: count - value });
  } else {
    return state;
  };
}


class Store {
  #state = {};
  #updateState = () => {};
  #cbs = [];
  constructor(updateState, initialState) {
    this.#state = initialState;
    this.#updateState = updateState;
  }

  get state () {
    return this.#state;
  }

  update(action) {
    this.#state = this.#updateState(this.#state, action);
    this.#cbs.forEach(cb => cb());
  }

  subscribe(cb) {
    this.#cbs.push(cb);
    return () => this.#cbs = this.#cbs.filter(myCb => myCb !== cb);
  }
}

class Counter {
  #node = null;
  constructor(node) {
    this.#node = node;
  }

  set value(value) {
    this.#node.textContent = value;
  }
}

const store = new Store(updateState, { count: 0 });

const counterNode = document.body.querySelector('#counter');
const counter = new Counter(counterNode);
counter.value = store.state.count;
const unsubscribe =  store.subscribe(()=> counter.value = store.state.count);

const inc = { action: 'inc', value: 1 }
const dec = { action: 'dec', value: 1 }

document.body.querySelector('#btn-inc').addEventListener('click',
() => {
  store.update(inc);
});

document.body.querySelector('#btn-dec').addEventListener('click',
() => {
  store.update(dec);
});

