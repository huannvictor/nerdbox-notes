'use client'

import { XCircle } from "@phosphor-icons/react"
import Link from "next/link"
import { useState } from "react"
import styles from './Search.module.css'

interface Props {
  searchNotes: (query: string) => void
  fetchNotes: () => void
}

const { searchWrapper, input, clearBtn } = styles

export default function Search(props: Props) {
  const [query, setQuery] = useState('')

  return (
    <div className={searchWrapper}>
      <input
        className={input}
        type="text"
        name={query}
        value={query}
        placeholder="Procurar Nota"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && props.searchNotes(query)}
      />
      <Link
        className={clearBtn}
        href="#"
        onClick={() => {
          props.fetchNotes()
          setQuery('')
        }}
      >
        <XCircle size={32} weight="duotone" />
      </Link>
    </div>
  )
}