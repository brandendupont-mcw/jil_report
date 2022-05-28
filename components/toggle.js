import { useState } from 'react'
import { Switch } from '@headlessui/react'

function MyToggle({enabled, setEnabled}) {


  return (
      <div className='mb-4'>
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-black' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
    <span className='text-xs font-bold pb-4 ml-2'>{enabled ? 'Percentage':  'Count' }</span>
    </div>
  )
}

export default MyToggle;