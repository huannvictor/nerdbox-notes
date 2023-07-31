'use client'

import Notes from '@/components/notes'
import { useState } from 'react'

export default function NotesScreen() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
