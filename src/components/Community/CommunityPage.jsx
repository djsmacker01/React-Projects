import React, {useState} from 'react'

//place holder post for data
const demoPost = [
  {
    id: 1,
    user: "user1",
    comment: "First comment",
    time: "1 hour ago",
    upvotes: 10,
    downvotes: 2,
  },
  {
    id: 2,
    user: "user3",
    comment: "user3 comment",
    time: "3 hour ago",
    upvotes: 12,
    downvotes: 4,
  },
];

const CommunityPage = () => {
   
    const [isJoined, setIsJoined] = useState(false)

  return (
    <div>CommunityPage</div>
  )
}

export default CommunityPage