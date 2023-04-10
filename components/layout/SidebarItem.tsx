import { IconType } from 'react-icons'
import useCurrentUser from '../../hooks/useCurrentUser'
import { useCallback } from 'react'
import useLoginModal from '../../hooks/useLoginModal'
import { useRouter } from 'next/router'
import { BsDot } from 'react-icons/bs'

interface SidebarItemProps {
  label: string
  href?: string
  icon: IconType
  onClick?: () => void
  auth?: boolean
  alert?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
  alert,
}) => {
  const { data: currentUser } = useCurrentUser()
  const loginModal = useLoginModal()
  const router = useRouter()
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick()
    }
    if (auth && !currentUser) {
      loginModal.onOpen()
    } else if (href) {
      router.push(href)
    }
  }, [router, auth, currentUser, loginModal, href, onClick])
  return (
    <div className='flex items-center' onClick={handleClick}>
      <div className='relative rounded-full flex items-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden w-14 h-14 p-4'>
        <Icon size={28} color='white' />
        {alert ? (
          <BsDot className='text-sky-500 absolute -top-4 left-0' size={70} />
        ) : null}
      </div>
      <div className='relative hidden lg:flex rounded-full items-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer p-4 gap-4'>
        <Icon size={24} color='white' />
        {alert ? (
          <BsDot className='text-sky-500 absolute -top-4 left-0' size={70} />
        ) : null}
        <p className='text-white text-xl hidden lg:block'>{label}</p>
      </div>
    </div>
  )
}

export default SidebarItem
