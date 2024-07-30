import React from "react";
import Community from "./Community";

const CommunityList = ({ communities, onJoin, posts, onLike }) => (
  <div>
    {communities.map((community) => (
      <Community
        key={community.id}
        community={community}
        onJoin={onJoin}
        posts={posts.filter((post) => post.communityId === community.id)}
        onLike={onLike}
      />
    ))}
  </div>
);

export default CommunityList;
