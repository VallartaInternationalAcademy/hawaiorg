import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]
interface ItemOptions {
  className: string,
  title: string
}
interface Props {
  items: ItemOptions[],
  callBack: Dispatch<SetStateAction<string>>,
  selected: string
}

export default function HeroNavigation({items, callBack, selected}: Props) {
  // const [selected, setSelected] = useState(items[0])

  return (
    <div className="w-full px-4 -mt-10">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup className="flex justify-center" value={selected} onChange={callBack}>
          {items.map((slide) => (
            <RadioGroup.Option
              key={slide.title}
              value={slide.className}
              className={({ active, checked }) =>
                `${checked ? 'bg-primaryPurple/75 text-white' : 'bg-white'}
                  relative flex cursor-pointer rounded-full h-4 w-4 px-2 py-2 mx-1 shadow-md focus:outline-none`
              }
            >
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon({...props}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
