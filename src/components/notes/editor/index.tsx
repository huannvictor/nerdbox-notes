/* eslint-disable no-undef */
'use client'

import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Note } from '..'

interface Props {
  note: Note
  updateNote: (oldNote: Note, params: { title: string; body: string }) => void
}

export default function Editor(props: Props) {
  const [currentContent, setCurrentContent] = useState<string>('')
  const [timer, setTimer] = useState<number | undefined>()

  const updateNote = (content: string) => {
    const title = content.replace(/(<([^>]+)>)/gi, '').slice(0, 30)
    props.updateNote(props.note, { title, body: content })
  }

  const handleChange = (content: string, delta: any, source: any) => {
    clearTimeout(timer)

    if (source === 'user') {
      setCurrentContent(content)
      if (typeof window !== 'undefined') setTimer(window.setTimeout(() => updateNote(content), 2000))
    }
  }

  useEffect(() => {
    return setCurrentContent(props.note.body)
  }, [props.note])

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
  }

  return (
    <>
      <ReactQuill
        value={currentContent}
        modules={modules}
        onChange={handleChange}
      />
    </>
  )
}
