'use client'

import { Listbox, Transition } from '@headlessui/react'
import { CaretUpDown } from '@phosphor-icons/react'
import { Fragment, useState } from 'react'

interface DropdownOption {
  label: string
  onClick: () => void
}

interface DropdownProps {
  user: string
  options: DropdownOption[]
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

const DropdownMenu = ({ user, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (onClick: () => void) => {
    setIsOpen(false)
    onClick()
  }

  return (
    // eslint-disable-next-line prettier/prettier
    <Listbox value={null} onChange={() => { }}>
      {({ open }) => (
        <>
          <Listbox.Button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          >
            <span className="flex items-center">
              <span className="ml-3 block truncate">{user}</span>
              <CaretUpDown />
            </span>
          </Listbox.Button>

          <Transition
            show={isOpen}
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto text-base">
              {options.map((option) => (
                <Listbox.Option
                  key={option.label}
                  className={({ active }) =>
                    classNames(
                      active ? 'text-white bg-indigo-600' : 'text-gray-900',
                      'cursor-pointer select-none relative py-2 pl-3 pr-9',
                    )
                  }
                  value={null}
                  onClick={() => handleOptionClick(option.onClick)}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={classNames(
                          active ? 'font-semibold' : 'font-normal',
                          'ml-3',
                        )}
                      >
                        {option.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  )
}

export default DropdownMenu
