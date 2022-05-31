import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

function MyTab({categoriesObject}) {

    let [categories] = useState(categoriesObject)
  
    return (
      <div className="w-full max-w-md px-2 py-6 mb-2 sm:px-0 z-index-20">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-lg bg-mblue p-1 mb-8">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-xs font-medium leading-5 text-white',
                    'ring-white ring-opacity-90 ring-offset-2 ring-offset-mblue focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow text-mblue'
                      : 'text-white hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
          
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className=""
                    >
                      <div  className="">
                        {post.viz}
                      </div>
  
  
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    )
  }
  
export default MyTab