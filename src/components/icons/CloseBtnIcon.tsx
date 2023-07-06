'use client'

import { XSquare } from '@phosphor-icons/react'
import React from 'react'

interface Props {
  className: string
}

const CloseBtnIcon: React.FC<Props> = ({ className }) => (
  <XSquare weight="fill" className={className} />
)

export default CloseBtnIcon
