import { useReducer, useState } from "react"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { taskReducer } from "../reducer/task.reducer"
import { TASK_ACTION_TYPES } from "../reducer/task-action-types"

export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, dispatch] = useReducer(taskReducer, [])

  const SectionTag = HTML_TAGS.SECTION
  const TitleTag = HTML_TAGS.H2

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

  const handleToggleTask = (taskId) => { 
    dispatch({
      type: TASK_ACTION_TYPES.TOGGLE_TASK,
      payload: taskId,
    })
  }

  const handleDeleteTask = (taskId) => { 
    dispatch({
      type: TASK_ACTION_TYPES.DELETE_TASK,
      payload: taskId,
    })
  }

  return (
    <SectionTag>
      <TitleTag>{TASK_UI_TEXT.BOARD_TITLE}</TitleTag>

      <TaskForm
        taskText={taskText}
        onTaskTextChange={handleTaskTextChange}
        onAddTask={handleAddTask}
      />

      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask} 
        onDeleteTask={handleDeleteTask} 
      />
    </SectionTag>
  )
}