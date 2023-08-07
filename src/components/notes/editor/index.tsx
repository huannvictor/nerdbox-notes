'use client'

import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Note } from '..'

export default function Editor(currentNote: Note | undefined) {
  const [currentContent, setCurrentContent] = useState<string | undefined>('')
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

  useEffect(() => {
    return setCurrentContent(currentNote?.body)
  }, [currentNote])

  return (
    <>
      <ReactQuill value={currentContent} modules={modules} />
    </>
  )
}
