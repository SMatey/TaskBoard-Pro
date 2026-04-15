import { TASK_ACTION_TYPES } from "./task-action-types"

export function taskReducer(state, action) {
  switch (action.type) {
    case TASK_ACTION_TYPES.ADD_TASK:
      return [action.payload, ...state]

    case TASK_ACTION_TYPES.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload)
    case TASK_ACTION_TYPES.TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      )

    default:
      return state
  }
}