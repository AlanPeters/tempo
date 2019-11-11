import { State, createTodo } from './state'
import { Action } from './action'

export const reducer = (state: State, action: Action) => {
  const newState = Object.assign({}, state)
  switch (action.kind) {
    case 'adding-todo':
      if (action.title) {
        newState.adding = action.title
      } else {
        delete newState.adding
      }
      break
    case 'create-todo':
      if (action.title) newState.todos = state.todos.concat([createTodo(action.title)])
      delete newState.adding
      break
    case 'editing-todo':
      newState.editing = { id: action.id, title: action.title }
      break
    case 'cancel-adding-todo':
      delete newState.adding
      break
    case 'cancel-editing-todo':
      delete newState.editing
      break
    case 'clear-completed':
      newState.todos = state.todos.filter(v => !v.completed)
      break
    case 'remove-todo':
      newState.todos = state.todos.filter(v => v.id !== action.id)
      break
    case 'toggle-completed':
      const index = state.todos.findIndex(v => v.id === action.id)
      const current = state.todos[index]
      const todo = { ...current, completed: !current.completed }
      newState.todos = [...state.todos.slice(0, index), todo, ...state.todos.slice(index + 1)]
      break
    case 'toggle-filter':
      newState.filter = action.filter
      break
    case 'update-todo':
      delete newState.editing
      const index2 = state.todos.findIndex(o => o.id === action.id)
      if (index2 >= 0) {
        const updated = { id: action.id, title: action.title, completed: state.todos[index2].completed }
        newState.todos = [...state.todos.slice(0, index2), updated, ...state.todos.slice(index2 + 1)]
      }
      break
    default:
      throw 'unreacheable code'
  }
  return newState
}
