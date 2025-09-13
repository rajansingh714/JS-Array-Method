//  Find first blog post with more than 3 comments and at least 1 flagged comment

const posts = [
  {
    title: "Intro to JS",
    comments: [
      { text: "Nice!", flagged: false },
      { text: "Helpful", flagged: false },
    ]
  },
  {
    title: "Deep Dive into React",
    comments: [
      { text: "Too complex", flagged: true },
      { text: "Great content", flagged: false },
      { text: "Loved it", flagged: false },
      { text: "Thank you!", flagged: false },
    ]
  },
];

const result = posts.find(post =>
  post.comments.length > 3 &&
  post.comments.some(comment => comment.flagged === true)
);

console.log(result); // "Deep Dive into React"
