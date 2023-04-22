    import React, { useState } from 'react';

    const Card = ({ name }) => {
    const [count, setCount] = useState(0);
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);

    const handleUpvote = () => {
        if (!upvoted) {
        setCount(count + 1);
        setUpvoted(true);
        setDownvoted(false);
        }
    };

    
    const handleDownvote = () => {
        if (!downvoted) {
        setCount(count - 1);
        setDownvoted(true);
        setUpvoted(false);
        }
    };

    return (
        <div className="card">
        <h2>{name}</h2>
        <p>Counter: {count}</p>
        <div className="buttons">
            <button disabled={upvoted} onClick={handleUpvote}>
            Upvote
            </button>
            <button disabled={downvoted} onClick={handleDownvote}>
            Downvote
            </button>
        </div>
        </div>
    );
    };

    const CardList = () => {
    const items = ['Dorothy', 'Darling', 'Dewling'];
    return (
        <div className="card-list">
        {items.map((item) => (
            <Card key={item} name={item} />
        ))}
        </div>
    );
    };

    export default CardList;
