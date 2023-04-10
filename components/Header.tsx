import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi'

interface HeaderProps {
  label: string
  showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter()
  const handleBackClick = useCallback(() => {
    router.back()
  }, [router])
  return (
    <div className='border-b-[1px] border-neutral-800 p-5'>
      <div className='flex flex-row items-center gap-2'>
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBackClick}
            size={20}
            color='white'
            className='cursor-pointer hover:bg-opacity-70 transition'
          />
        )}
        <h2 className='text-white text-xl font-semibold'>{label}</h2>
      </div>
    </div>
  )
}

export default Header
