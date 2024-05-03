import { useSearchParams } from 'next/navigation'

const UserTabs = () => {
  const params = useSearchParams()
  const category = params.get('category')
  return <div>UserTabs</div>
}

export default UserTabs
