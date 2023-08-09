'use client'

import { Eraser } from "@phosphor-icons/react"
import Link from "next/link"
import { useState } from "react"
import './styles.css'

interface Props {
  searchNotes: (query: string) => void
  fetchNotes: () => void
}

export default function Search(props: Props) {
  const [query, setQuery] = useState('')

  return (
    <div className={'searchWrapper'}>
      <input
        className={'input'}
        type="text"
        name={query}
        value={query}
        placeholder="Procurar Nota"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && props.searchNotes(query)}
      />
      <Link
        className={'clearBtn'}
        href="#"
        onClick={() => {
          props.fetchNotes()
          setQuery('')
        }}
      >
        <Eraser size={32} weight="duotone" />
      </Link>
    </div>
  )
}