'use client'

import NotesService from '@/services/notes'
import { List } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import ListNotes from '../notes/list'
import customStyle from './Notes.module.css'
import Editor from './editor'
import Search from './search'
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
  const [currentNote, setCurrentNote] = useState<Note>({
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

  const deleteNote = async (id: string) => {
    await NotesService.delete(id)
    fetchNotes()
  }

  const updateNote = async (
    oldNote: Note,
    params: { title: string; body: string },
  ) => {
    const updatedNote = await NotesService.update(oldNote._id, params)
    const index = notes.indexOf(oldNote)
    const newNotes = notes

    newNotes[index] = updatedNote.data
    setNotes(newNotes)
    setCurrentNote(updatedNote.data)
  }

  const searchNotes = async (query: string) => {
    const response = await NotesService.search(query)
    setNotes(response.data)
  }

  const selectNote = (id: string) => {
    const selectedNote = notes.find((selectedNote) => {
      return selectedNote._id === id
    })

    if (selectedNote !== undefined) setCurrentNote(selectedNote)
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
          <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
        </div>

        <div className={menuItem}>
          <ListNotes
            notes={notes}
            selectNote={selectNote}
            currentNote={setCurrentNote}
            createNote={createNote}
            deleteNote={deleteNote}
          />
        </div>
      </Menu>

      <button className={sidebarMenuBtn} onClick={handleClick}>
        {isOpen === false && <List size={24} />}
      </button>

      <div className={notesEditor} id="notes-editor">
        <Editor note={currentNote} updateNote={updateNote} />
      </div>
    </>
  )
}
