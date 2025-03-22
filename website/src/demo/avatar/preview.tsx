'use client'

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from 'twistail-react/avatar'
import { getInitials } from 'twistail-utils'

const users = [
  {
    name: 'Robert Wilson',
    role: 'Designer',
    image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Robert&backgroundColor=ffdfbf',
  },
  {
    name: 'Jocelyn Davis',
    role: 'Developer',
    image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn&backgroundColor=ffdfbf',
  },
  {
    name: 'Jack Brown',
    role: 'Manager',
    image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Jack&backgroundColor=ffdfbf',
  },
  {
    name: 'Liliana Johnson',
    role: 'Marketing',
  },
]

export default function AvatarDemo() {
  return (
    <AvatarGroup max={3}>
      {users.map((user) => (
        <Avatar key={user.name}>
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  )
}
