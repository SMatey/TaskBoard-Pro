import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { useEffect, useId, useRef } from "react"

export function TaskForm({ taskText, onTaskTextChange, onAddTask }) {
  const SectionTag = HTML_TAGS.SECTION
  const TitleTag = HTML_TAGS.H3
  const InputTag = HTML_TAGS.INPUT
  const ButtonTag = HTML_TAGS.BUTTON


  const inputRef = useRef(null)
  const taskInputId = useId()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <SectionTag>
      <TitleTag>{TASK_UI_TEXT.FORM_TITLE}</TitleTag>
    <label htmlFor={taskInputId}>{TASK_UI_TEXT.FORM_LABEL}</label>
      <InputTag
       ref={inputRef}
        id={taskInputId}
        type="text"
        value={taskText}
        onChange={onTaskTextChange}
        placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
      />

      <ButtonTag onClick={onAddTask}>
        {TASK_UI_TEXT.ADD_BUTTON}
      </ButtonTag>
    </SectionTag>
  )
}