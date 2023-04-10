import useCurrentUser from '../../hooks/useCurrentUser'
import useUser from '../../hooks/useUser'
import useUsers from '../../hooks/useUsers'
import Avatar from '../Avatar'

const FollowBar = () => {
  const { data: currentUser } = useCurrentUser()
  const { data: users = [] } = useUsers()
  if (users.length === 0) {
    return null
  }
  return (
    <div className='px-6 py-4 hidden lg:block'>
      <div className='rounded-xl p-4 bg-neutral-800'>
        <h2 className='text-white text-xl font-semibold'>Who to follow</h2>
        {currentUser &&
          users.map((user: Record<string, any>) => (
            <div key={user?.id} className='flex flex-row mt-4 gap-6'>
              <Avatar userId={user?.id} />
              <div className='flex flex-col'>
                <p className='text-white font-semibold text-sm'>{user?.name}</p>
                <p className='text-white text-sm'>@{user?.username}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default FollowBar
