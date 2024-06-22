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
    const [posts, setPosts] = useState(demoPost)
    const [newPost, setNewPost] = useState('')
    

    const handleJoin = () => {
        setIsJoined(true);
    }

    const handlePost = () => {
        if (newPost.trim()) {
            setPosts([...posts, { id: posts.length + 1, user: 'CurrentUser', newPost, time: 'Just now', upvotes: 0, downvotes: 0 }])
            setNewPost('')
        }
    }
  return (
    <div>CommunityPage</div>
  )
}

export default CommunityPage