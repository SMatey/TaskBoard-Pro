export function TaskList({ tasks }) {
  return (
    <section>
      <h3>Lista de tareas</h3>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </section>
  )
}