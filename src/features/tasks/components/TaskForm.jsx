export function TaskForm({ taskText, onTaskTextChange, onAddTask }) {
  return (
    <section>
      <h3>Agregar tarea</h3>

      <input
        type="text"
        value={taskText}
        onChange={onTaskTextChange}
        placeholder="Escriba una tarea"
      />

      <button onClick={onAddTask}>Agregar</button>
    </section>
  )
}