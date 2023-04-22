import { useState } from "react";

function VoteCard() {
  const [count, setCount] = useState(0);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvote = () => {
    setCount(count + 1);
    setUpvoted(true);
    setDownvoted(false);
  };

  const handleDownvote = () => {
    setCount(count - 1);
    setUpvoted(false);
    setDownvoted(true);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button disabled={upvoted} onClick={handleUpvote}>Upvote</button>
      <button disabled={downvoted} onClick={handleDownvote}>Downvote</button>
    </div>
  );
}

export default VoteCard;
