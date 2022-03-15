import { Menu } from "@headlessui/react"
import { motion } from "framer-motion"
import { BiCollection, BiPlusCircle } from "react-icons/bi"
import Link from "next/link"
import { ChevronDownIcon } from "@heroicons/react/solid"

export default function Dropdown() {
  return (
    <Menu as='div' className='relative z-50 inline-block text-left'>
      <Menu.Button
        className='flex h-full items-center justify-between px-5 text-xl hover:bg-opacity-30 
      '>
        Collections <ChevronDownIcon className='ml-3 h-5 w-5' />
      </Menu.Button>
      <Menu.Items
        as={motion.ul}
        initial={{
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        exit={{
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        transition={{ duration: 0.2 }}
        className='bg-secondary-300 border-primary-500 divide-secondary-700 absolute right-0 z-50 w-48 origin-top
           transform  divide-y rounded-md border p-2 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <Menu.Item as='li'>
          {({ active }) => (
            <Link href='/collections'>
              <a
                className={`${
                  active ? "bg-secondary-500 text-white" : " "
                }  flex w-full px-2 py-2`}>
                <BiCollection className='mr-3 h-5 w-5' /> All collections
              </a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item as='li'>
          {({ active }) => (
            <Link href='/collections/add'>
              <a
                className={`${
                  active ? "bg-secondary-500 text-white" : " "
                }  flex w-full  px-2 py-2`}>
                <BiPlusCircle className='mr-3 h-5 w-5' />
                Add collection
              </a>
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
