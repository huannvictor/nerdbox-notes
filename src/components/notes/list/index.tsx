'use client'

import { PlusCircle, XCircle } from '@phosphor-icons/react'
import Moment from 'moment'
import styles from './ListNotes.module.css'

interface Note {
  title: string
  body: string
  id: string
  _id: string
  createNote_at: string
}

interface Props {
  notes: Note[]
  selectNote: (prop: string) => any
  currentNote: Note
  createNote: () => void
  deleteNote: (prop: string) => void
}

export default function ListNotes(props: Props) {
  const { notes, createNote, deleteNote } = props
  const {
    listBox,
    createNoteBtn,
    listHead,
    listHeadTitle,
    listWrapper,
    listOption,
    listOptionHeader,
    listTitle,
    listDescription,
    listData,
    deleteBtn,
  } = styles

  return (
    <div className={listBox}>
      <div className={listHead}>
        <h1 className={listHeadTitle}>{notes.length} Notas</h1>
        <button className={createNoteBtn} onClick={createNote}>
          <PlusCircle size={20} />
          Nova Nota
        </button>
      </div>
      <ul className={listWrapper}>
        {notes.map((item, key) => (
          <li key={key} className={listOption}>
            <div className={listOptionHeader}>
              <h1 className={listTitle}>
                {item.title && item.title.replace(/(<([^>]+)>)/gi, '')}
              </h1>
              <button
                className={deleteBtn}
                onClick={() => deleteNote(item._id)}
              >
                <XCircle size={20} weight="duotone" />
              </button>
            </div>
            <p className={listDescription}>
              {item.body &&
                item.body.replace(/(<([^>]+)>)/gi, '').substring(0, 40)}
              ...
            </p>
            <span className={listData}>
              Criado em {Moment(item.createNote_at).format('DD/MM')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
