import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { TaskItem } from "./TaskItem"

export function TaskList({ tasks, onToggleTask, onDeleteTask }) { 
  const SectionTag = HTML_TAGS.SECTION
  const TitleTag = HTML_TAGS.H3
  const ListTag = HTML_TAGS.UL
  //const ListItemTag = HTML_TAGS.LI
  const ParagraphTag = HTML_TAGS.P

  return (
    <SectionTag>
      <TitleTag>{TASK_UI_TEXT.LIST_TITLE}</TitleTag>

      {tasks.length === 0 ? (
        <ParagraphTag>{TASK_UI_TEXT.EMPTY_MESSAGE}</ParagraphTag>
      ) : (
        <ListTag>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask} 
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ListTag>
      )}
    </SectionTag>
  )
}