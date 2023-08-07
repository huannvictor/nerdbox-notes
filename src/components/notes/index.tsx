'use client'

import NotesService from '@/services/notes'
import { List } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import ListNotes from '../notes/list'
import customStyle from './Notes.module.css'
import Editor from './editor'
import './styles.css'

const { menu, menuItem, sidebarMenuBtn, notesEditor } = customStyle

export interface Note {
  title: string
  body: string
  id: string
  _id: string
  createNote_at: string
}

export default function Notes() {
  const [isOpen, setIsOpen] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])
  const [currentNote, setCurrentNote] = useState<Note | undefined>({
    title: '',
    body: '',
    id: '',
    _id: '',
    createNote_at: '',
  })

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
    return isOpen
  }

  async function fetchNotes() {
    const response = await NotesService.index()

    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    } else {
      setNotes([])
    }
  }

  const createNote = async () => {
    await NotesService.create()
    fetchNotes()
  }

  const selectNote = (id: string) => {
    const note: Note | undefined = notes.find((note) => {
      return note._id === id
    })

    console.log('selectNote', note)

    setCurrentNote(note)
  }

  const deleteNote = async (id: string) => {
    await NotesService.delete(id)
    fetchNotes()
  }
  return (
    <>
      <Menu
        pageWrapId={'notes-editor'}
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        disableAutoFocus
        outerContainerId={'notes'}
        customBurgerIcon={false}
        customCrossIcon={false}
        className={menu}
      >
        <div className={menuItem}>
          <p>Search</p>
        </div>
        <div className={menuItem}>
          <ListNotes
            notes={notes}
            selectNote={selectNote}
            currentNote={currentNote}
            createNote={createNote}
            deleteNote={deleteNote}
          />
        </div>
      </Menu>

      <button className={sidebarMenuBtn} onClick={handleClick}>
        {isOpen === false && <List size={24} />}
      </button>

      <div className={notesEditor} id="notes-editor">
        <Editor currentNote={currentNote} />
      </div>
    </>
  )
}
