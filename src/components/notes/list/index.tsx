'use client'

import { PlusCircle } from '@phosphor-icons/react'
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
  create: () => void
}

export default function ListNotes(props: Props) {
  const { notes, create } = props
  const {
    createNoteBtn,
    listHead,
    listHeadTitle,
    listWrapper,
    listOption,
    listTitle,
    listDescription,
    listData,
  } = styles

  return (
    <>
      <div className="listBox">
        <div className={listHead}>
          <h1 className={listHeadTitle}>{notes.length} Notas</h1>
          <button className={createNoteBtn} onClick={create}>
            <PlusCircle size={20} />
            Nova Nota
          </button>
        </div>
        <ul className={listWrapper}>
          {notes.map((item, key) => (
            <li key={key} className={listOption}>
              <h1 className={listTitle}>
                {item.title && item.title.replace(/(<([^>]+)>)/gi, '')}
              </h1>
              <p className={listDescription}>
                {item.body &&
                  item.body.replace(/(<([^>]+)>)/gi, '').substring(0, 40)}
                ...
              </p>
              <span className={listData}>
                Criado em {Moment(item.created_at).format('DD/MM')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
