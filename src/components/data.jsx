export const initialCommunities = [
  { id: 1, name: "askphilosophy", joined: false },
  { id: 2, name: "askscience", joined: false },
];

export const initialPosts = [
  {
    id: 1,
    communityId: 1,
    title:
      "What pieces of philosophy would you recommend to a beginner on the meaning of true love?",
    content:
      "Lately I've been reflecting a lot on this topic and I've really resonated with Alan Watts talks about love and falling in love...",
    likes: 10,
    comments: 0,
    upvoteRate: 100,
  },
  {
    id: 2,
    communityId: 2,
    title:
      "Can quantum entanglement be used for faster-than-light communication?",
    content:
      "I've been reading about quantum entanglement and I am curious about its practical applications...",
    likes: 15,
    comments: 2,
    upvoteRate: 95,
  },
];
