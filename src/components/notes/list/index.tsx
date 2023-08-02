'use client'

import { Listbox } from '@headlessui/react'
import Moment from 'moment'
import styles from './ListNotes.module.css'

interface Note {
  title: string
  body: string
  id: string
  created_at: string
}

interface Props {
  notes: Note[]
  selectNote: (prop: string) => void
  currentNote: Note | undefined
}

export default function ListNotes(props: Props) {
  const { notes, currentNote } = props
  const { listWrapper, listOption, listTitle, listDescription, listData } =
    styles

  return (
    <>
      <Listbox value={currentNote}>
        <Listbox.Button>{notes.length} Notas</Listbox.Button>
        <Listbox.Options className={listWrapper}>
          {notes.map((item, key) => (
            <Listbox.Option key={key} value={item} className={listOption}>
              <h1 className={listTitle}>
                {item.title.replace(/(<([^>]+)>)/gi, '').substring(0, 30)}
              </h1>
              <p className={listDescription}>
                {item.body.replace(/(<([^>]+)>)/gi, '').substring(0, 40)}...
              </p>
              <span className={listData}>
                Criado em {Moment(item.created_at).format('DD/MM')}
              </span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  )
}
