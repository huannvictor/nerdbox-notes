'use client'

import NotesService from '@/services/notes'
import { useEffect, useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import ListNotes from '../notes/list'
import customStyle from './SidebarMenu.module.css'
import './styles.css'

const { menu, menuItem } = customStyle

interface Note {
  title: string
  body: string
  id: string
  _id: string
  createNote_at: string
}

const SidebarMenu = (props: {
  isOpen: boolean
  setIsOpen: (arg0: boolean) => void
}) => {
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
    <Menu
      pageWrapId={'notes-editor'}
      isOpen={props.isOpen}
      onStateChange={(state) => props.setIsOpen(state.isOpen)}
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
  )
}

export default SidebarMenu
