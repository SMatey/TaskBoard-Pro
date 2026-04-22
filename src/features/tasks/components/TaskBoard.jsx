import { useCallback, useMemo, useReducer, useState } from "react" 
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { taskReducer } from "../reducer/task.reducer"
import { TASK_ACTION_TYPES } from "../reducer/task-action-types"
import { TASK_STATUS } from "../constants/task.constants"
import { TaskFilters } from "./TaskFilters"

export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, dispatch] = useReducer(taskReducer, [])
const [searchText, setSearchText] = useState("")
const [statusFilter, setStatusFilter] = useState(TASK_STATUS.ALL)   

  const SectionTag = HTML_TAGS.SECTION
  const TitleTag = HTML_TAGS.H2

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleAddTask = useCallback(() => { 
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
  }, [taskText])

  const handleToggleTask = useCallback((taskId) => { 
    dispatch({
      type: TASK_ACTION_TYPES.TOGGLE_TASK,
      payload: taskId,
    })
  }, [])

  const handleDeleteTask = useCallback((taskId) => { 
    dispatch({
      type: TASK_ACTION_TYPES.DELETE_TASK,
      payload: taskId,
    })
  }, [])

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value)
  }

 const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesText = task.title
        .toLowerCase()
        .includes(searchText.toLowerCase())

      const matchesStatus =
        statusFilter === TASK_STATUS.ALL
          ? true
          : statusFilter === TASK_STATUS.COMPLETED
          ? task.completed
          : !task.completed

      return matchesText && matchesStatus
    })
  }, [tasks, searchText, statusFilter])

  return (
    <SectionTag>
      <TitleTag>{TASK_UI_TEXT.BOARD_TITLE}</TitleTag>

      <TaskForm
        taskText={taskText}
        onTaskTextChange={handleTaskTextChange}
        onAddTask={handleAddTask}
      />

    <TaskFilters
        searchText={searchText}
        statusFilter={statusFilter}
        onSearchTextChange={handleSearchTextChange}
        onStatusFilterChange={handleStatusFilterChange}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </SectionTag>
  )
}