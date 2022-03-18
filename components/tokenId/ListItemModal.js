import { Dialog } from "@headlessui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import useMarketInteractions from "../../hooks/useMarketInteraction"
import { formatIpfs } from "../../utils/common"
import ClipLoader from "react-spinners/ClipLoader"
import { toast } from "react-toastify"

const ListItemModal = ({ onClose, isOpen, data }) => {
  const [price, setPrice] = useState(0)
  const { listItem } = useMarketInteractions()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    if (price === 0) return
    const id = toast.loading("Awaiting signature ..", {
      position: toast.POSITION.TOP_LEFT,
      closeOnClick: true,
      closeButton: true,
    })
    setLoading(true)

    const res = await listItem(data, price)
    setLoading(false)
    const toastType = res === "success" ? "success" : "error"
    const toastMessage = res === "success" ? "Item listed successfully!" : "Error: Something went wrong"
    toast.update(id, {
      isLoading: false,
      type: toastType,
      render: toastMessage,
      autoClose: toastType === "success" && 4000,
    })
    if (res === "success") {
      setTimeout(() => {
        onClose()
      }, 2000)
    }
  }

  return (
    <Dialog
      as={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      open={isOpen}
      onClose={onClose}
      className='fixed inset-0 z-10 grid place-items-center overflow-y-auto'>
      <Dialog.Overlay className='fixed inset-0 bg-black/50' />
      <Dialog.Description className='max-w-96'>
        <motion.div className='border-secondary-600 bg-primary-900 shadow-glass-large z-20 grid place-items-center rounded-lg border p-5  px-24 backdrop-blur-sm backdrop-filter'>
          <Dialog.Title className='py-2 text-white'>List for sale</Dialog.Title>
          <div className='h-60 w-60 bg-gray-100'>
            <img src={formatIpfs(data?.imageUrl || data?.image || data?.url)} alt='' className='object-contain' />
          </div>
          <form onSubmit={onSubmit} className='mt-5 flex flex-col text-white'>
            <div className='border-secondary-100 flex w-full items-center justify-evenly rounded-md border px-2'>
              <label htmlFor='listPriceInput' className='col-span-1 px-3'>
                Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type='number'
                min={0}
                id='listPriceInput'
                className='cols-span-1 ring-secondary mr-2 block  bg-black p-2 text-lg text-white focus:ring'
                placeholder='amount'
                value={price}
              />
              <span className='col-span-1'> ETH </span>
            </div>
            <button
              type='submit'
              className=' from-secondary-500 to-secondary-700 mt-5 flex items-center justify-center rounded-lg bg-gradient-to-r py-2 text-xl font-black text-white hover:opacity-90'>
              <ClipLoader loading={loading} color='white' size={20} />
              <span className=''> List for sale</span>
            </button>
          </form>
        </motion.div>
      </Dialog.Description>
    </Dialog>
  )
}

export default ListItemModal
