import React from "react";
import Community from "../components/Community";

const CommunityList = ({
  communities,
  onJoin,
  posts,
  onLike,
  onComment,
  onCommentUpvote,
  onCommentDelete,
}) => (
  <div>
    {communities.map((community) => (
      <Community
        key={community.id}
        community={community}
        onJoin={onJoin}
        posts={posts.filter((post) => post.communityId === community.id)}
        onLike={onLike}
        onComment={onComment}
        onCommentUpvote={onCommentUpvote}
        onCommentDelete={onCommentDelete}
      />
    ))}
  </div>
);

export default CommunityList;
