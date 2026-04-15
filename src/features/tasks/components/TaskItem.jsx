export function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <span>
        {task.title} - {task.completed ? "Completada" : "Pendiente"}
      </span>

      <button onClick={() => onToggleTask(task.id)}>
        Completar
      </button>

      <button onClick={() => onDeleteTask(task.id)}>
        Eliminar
      </button>
    </li>
  )
}