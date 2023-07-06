'use client'

import { List } from '@phosphor-icons/react'
import React from 'react'

interface Props {
  className: string
}

const MenuIcon: React.FC<Props> = ({ className }) => (
  <List className={className} weight="fill" />
)

export default MenuIcon
