

// Find the first post that has 50+ likes, no flags, and all comments are longer than 10 characters


const posts = [
  {
    title: "Simple Post",
    likes: 55,
    flagged: false,
    comments: ["Great", "Nice post", "Wow!"]
  },
  {
    title: "Deep Dive Post",
    likes: 72,
    flagged: false,
    comments: ["Very detailed and informative", "Super useful!"]
  },
  {
    title: "Flagged Post",
    likes: 100,
    flagged: true,
    comments: ["OK"]
  }
];

const result = posts.find(post =>
  post.likes >= 50 &&
  !post.flagged &&
  post.comments.every(c => c.length > 10)
);

console.log(result); // Deep Dive Post
