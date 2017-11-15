import { createStore } from 'redux'

// Reducer
function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Store
let store = createStore(counter)

// bind ui handler
store.subscribe(() =>
  console.log(store.getState())
)

// Actions
const increment = { type: 'INCREMENT' }
const decrement = { type: 'DECREMENT' }

// fire
store.dispatch(increment)
store.dispatch(increment)
store.dispatch(decrement)
