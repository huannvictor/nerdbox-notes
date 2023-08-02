'use client'

import { Listbox } from '@headlessui/react'
import Moment from 'moment'
import { useState } from 'react'

interface Note {
  title: string
  body: string
  id: string
  created_at: string
}

export default function ListNotes(props: {
  notes: Note[]
  selectedNote: Note | undefined
  currentNote: Note | undefined
}) {
  const [selectedNote, setSelectedNote] = useState(props.notes[0])
  return (
    <>
      <Listbox value={selectedNote} onChange={setSelectedNote}>
        <Listbox.Button>{selectedNote.title}</Listbox.Button>
        <Listbox.Options>
          {props.notes.map((item, key) => (
            <Listbox.Option key={key} value={item}>
              <div>
                {item.title.replace(/(<([^>]+)>)/gi, '').substring(0, 15)}
              </div>
              <div>
                {item.body.replace(/(<([^>]+)>)/gi, '').substring(0, 30)}
              </div>
              <span>{Moment(item.created_at).format('DD/MM')}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  )
}
