import { useReducer, useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, dispatch] = useReducer(taskReducer, [])

  const SectionTag = HTML_TAGS.SECTION
  const HeadingTag = HTML_TAGS.H2

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    }

    dispatch({ 
      type: TASK_ACTION_TYPES.ADD_TASK, 
      payload: newTask, 
    })
    
    setTaskText("")
  }

  return (
    <SectionTag>
      <HeadingTag>{TASK_UI_TEXT.BOARD_TITLE}</HeadingTag>

      <TaskForm
        taskText={taskText}
        onTaskTextChange={handleTaskTextChange}
        onAddTask={handleAddTask}
      />

      <TaskList tasks={tasks} />
    </SectionTag>
  )
}