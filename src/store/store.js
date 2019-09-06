export default class Store {
  #state = {};
  #updateState = () => {};
  #cbs = [];
  constructor(updateState, initialState = {}) {
    this.#state = initialState;
    this.#updateState = updateState;
  }

  get state () {
    return this.#state;
  }

  dispatch(action) {
    this.#state = this.#updateState(this.#state, action);
    this.#cbs.forEach(cb => cb());
  }

  subscribe(cb) {
    this.#cbs.push(cb);
    return () => this.#cbs = this.#cbs.filter(myCb => myCb !== cb);
  }
}
