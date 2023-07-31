'use client'

import { useState } from 'react'

export default function useSidebarMenuHandler(prop: boolean) {
  const [isOpen, setIsOpen] = useState(prop)
  setIsOpen(!isOpen)
  return isOpen
}
