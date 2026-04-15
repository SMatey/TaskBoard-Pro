import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskList({ tasks }) {
  const SectionTag = HTML_TAGS.SECTION
  const HeadingTag = HTML_TAGS.H3
  const ParagraphTag = HTML_TAGS.P
  const UnorderedListTag = HTML_TAGS.UL
  const ListItemTag = HTML_TAGS.LI

  return (
    <SectionTag>
      <HeadingTag>{TASK_UI_TEXT.LIST_TITLE}</HeadingTag>

      {tasks.length === 0 ? (
        <ParagraphTag>{TASK_UI_TEXT.EMPTY_MESSAGE}</ParagraphTag>
      ) : (
        <UnorderedListTag>
          {tasks.map((task) => (
            <ListItemTag key={task.id}>{task.title}</ListItemTag>
          ))}
        </UnorderedListTag>
      )}
    </SectionTag>
  )
}