import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
    { id: 1, name: 'Statewide' },
    { id: 2, name: 'Cook' },
    { id: 3, name: '1' },
    { id: 4, name: '2' },
    { id: 5, name: '3' },
    { id: 6, name: '4' },
    { id: 7, name: '5' },
    { id: 8, name: '6' },
    { id: 9, name: '7' },
    { id: 10, name: '8' },
    { id: 11, name: '9' },
    { id: 12, name: '10' },
    { id: 13, name: '11' },
    { id: 14, name: '12' },
    { id: 15, name: '13' },
    { id: 16, name: '14' },
    { id: 17, name: '15' },
    { id: 18, name: '16' },
    { id: 19, name: '17' },
    { id: 20, name: '18' },
    { id: 21, name: '19' },
    { id: 22, name: '20' },
    { id: 23, name: '21' },
    { id: 24, name: '22' },
    { id: 25, name: '23' }
  ]

function Select({selected, setSelected}) {


  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (

    <div className=" z-100 w-48">
      <Combobox value={selected} onChange={setSelected} >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overscroll-none   rounded-lg bg-white text-left border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full bg-gray-100 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
              horizontal
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="mt-1 max-h-32 w-full overflow-y-auto rounded-md bg-gray-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-8 pr-4 ${
                        active ? 'bg-black text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-3 w-3 text-maroon" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
};

export default Select
