import { TASK_UI_TEXT } from "../constants/task-ui.constants"

export function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <span>
        {task.title} -{" "}
        {task.completed
          ? TASK_UI_TEXT.STATUS_COMPLETED
          : TASK_UI_TEXT.STATUS_PENDING}
      </span>

      <button onClick={() => onToggleTask(task.id)}>
        {TASK_UI_TEXT.TOGGLE_BUTTON}
      </button>

      <button onClick={() => onDeleteTask(task.id)}>
        {TASK_UI_TEXT.DELETE_BUTTON}
      </button>
    </li>
  )
}