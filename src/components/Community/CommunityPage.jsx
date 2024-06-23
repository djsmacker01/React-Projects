import React, { useState } from 'react'
import './CommunityPage.css'

//place holder post for data
// const demoPost = [
//   {
//     id: 1,
//     user: " user1 ",
//     comment: " First comment ",
//     time: " 1 hour ago ",
//     upvotes: 10,
//     downvotes: 2,
//   },
//   {
//     id: 2,
//     user: " user3 ",
//     comment: " user3 comment ",
//     time: " 3 hour ago ",
//     upvotes: 12,
//     downvotes: 4,
//   },
// ];

// const CommunityPage = ({communityTitle}) => {
   
//     const [isJoined, setIsJoined] = useState(false)
//     const [posts, setPosts] = useState(demoPost)
//     const [newPost, setNewPost] = useState('')
    

//     const handleJoin = () => {
//         setIsJoined(true);
//     }

//     const handlePost = () => {
//         if (newPost.trim()) {
//             setPosts([...posts, { id: posts.length + 1, user: 'CurrentUser', newPost, time: 'Just now', upvotes: 0, downvotes: 0 }])
//             setNewPost('')
//         }
//     }
//     return (
//       <div className="community-page">
//             <div className="header">
//                 <h1>{communityTitle}</h1>
//                 {!isJoined && <button onClick={handleJoin}>Join</button>}
//             </div>
//             <div className="posts">
//                 {posts.map(post => (
//                     <Post key={post.id} post={post} isJoined={isJoined} />
//                 ))}
//             </div>
//             {isJoined && (
//                 <div className="create-post">
//                     <textarea value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="Write a post..."></textarea>
//                     <button onClick={handlePost}>Post</button>
//                 </div>
//             )}
//         </div>
//   )
// }

// const Post = ({ post, isJoined }) => {
//   return (
//     <div className="post">
//       <div className="post-header">
//         <span>{post.user}</span>
//         <span>{post.time}</span>
//       </div>
//       <div className="post-content">
//         <p>{post.comment}</p>
//       </div>
//       <div className="post-actions">
//         <button>Upvote {post.upvotes}</button>
//         <button>Downvote {post.downvotes}</button>
//         {isJoined && <button>Comment</button>}
//       </div>
//     </div>
//   );
// };
// export default CommunityPage


// import React, `useState` from 'react';

const CommunityPage = ({ communityTitle }) => {
    const [joined, setJoined] = useState(false);
    const [newPost, setNewPost] = useState(''); 
    const [posts, setPosts] = useState(
        [
            { id: 1, user: 'User1', comment: 'One comment', time: '1 hour', upvotes: 10, downvotes: 2 },
            { id: 2, user: 'User2', comment: 'Another comment', time: '2 hours', upvotes: 5, downvotes: 1 },
        ],
    );

    const handlePost = () => 
    {
        if (newPost.trim()) 
        {
            setPosts([...posts,
                {
                    id: posts.length + 1,
                    user: 'Current User',
                    comment: newPost,
                    time: 'Just now',
                    upvotes: 0,
                    downvotes: 0,
                },
            ]);
            setNewPost('');
        }
    }

   
    
        return (
            <div className='community-page'>
                <div className='header'>
                    <h1>{communityTitle}
                    </h1>
                    {!joined ? 
                        <button onClick={() => setJoined(true)}>Join 
                        </button>
                    : 
                        <button disabled>Joined
                        </button>
                    }
                </div>
                <div className='posts'>
                    {posts.map((post) => {
                        return(
                            <div key={post.id} className='post'>
                                <p>
                                    <strong>{post.user}
                                    </strong>
                                </p>
                                <p>{post.comment}
                                </p>
                                <p>{post.time}
                                </p>
                                <p>
                                    <span>Upvotes: {post.upvotes}
                                    </span>
                                    <span>Downvotes: {post.downvotes}
                                    </span>
                                </p>
                            </div>
                        )
                    })}
                </div>
                {joined && (
                    <div className='create-post'>
                        <textarea 
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                            placeholder='What’s on your mind?'
                        />
                        <button onClick={handlePost}>Post 
                        </button>
                    </div>
                )}
            </div>
        )
    }


export default CommunityPage;
