import { useRouter } from 'next/router'
import { BsTwitter } from 'react-icons/bs'

const SidebarLogo = () => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/')}
      className='p-4 h-14 w-14 flex items-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition'
    >
      <BsTwitter size={28} color='white' />
    </div>
  )
}

export default SidebarLogo
