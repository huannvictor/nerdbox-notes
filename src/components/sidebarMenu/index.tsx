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
  _id?: string
  created_at: string
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
    created_at: '',
  })

  useEffect(() => {
    fetchNotes()
  }, [])

  async function fetchNotes() {
    const response = await NotesService.index()
    console.log(response.data)

    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    }
  }

  const selectNote = (id: string): void => {
    const note: Note | undefined = notes.find((note) => {
      return note._id === id
    })
    setCurrentNote(note)
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
        />
      </div>
    </Menu>
  )
}

export default SidebarMenu
