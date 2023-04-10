import { useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  onSubmit?: () => void
  title: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel?: string
  disabled?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return
    } else {
      onClose?.()
    }
  }, [onClose, disabled])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    } else {
      onSubmit?.()
    }
  }, [onSubmit, disabled])

  if (!isOpen) {
    return null
  }
  return (
    <>
      <div className='flex items-center justify-center overflow-x-hidden overflow-y-auto z-50 inset-0 fixed outline-none focus:outline-none bg-neutral-800 bg-opacity-70'>
        <div className='relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto'>
          {/* CONTENT */}
          <div className='h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none'>
            {/* HEADER */}
            <div className='flex items-center justify-between p-10 rounded-t'>
              <h3 className='text-white font-semibold text-3xl'>{title}</h3>
              <button
                onClick={handleClose}
                className='hover:opacity-70 transition'
              >
                <AiOutlineClose size={20} color='white' />
              </button>
            </div>
            {/* BODY */}
            <div className='flex-auto p-10 relative'>{body}</div>
            {/* FOOTER */}
            {footer}
            <div className='flex flex-col gap-2 p-10 '>
              <Button
                disabled={disabled}
                label={`${actionLabel}`}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
