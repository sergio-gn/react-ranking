import React, { useState } from 'react';

const Card = ({ name, count, handleUpvote, handleDownvote }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvoteClick = () => {
    handleUpvote();
    setUpvoted(true);
    setDownvoted(false);
  };

  const handleDownvoteClick = () => {
    handleDownvote();
    setDownvoted(true);
    setUpvoted(false);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Counter: {count}</p>
      <div className="buttons">
        <button disabled={upvoted} onClick={handleUpvoteClick}>
          Upvote
        </button>
        <button disabled={downvoted} onClick={handleDownvoteClick}>
          Downvote
        </button>
      </div>
    </div>
  );
};

const CardList = () => {
  const [items, setItems] = useState([
    { name: 'Dorothy', count: 0 },
    { name: 'Darling', count: 0 },
    { name: 'Dewling', count: 0 }
  ]);

  const handleUpvote = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = {
        ...prevItems[index],
        count: prevItems[index].count + 1
      };
      return sortItems(updatedItems);
    });
  };

  const handleDownvote = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (prevItems[index].count > 0) {
        updatedItems[index] = {
          ...prevItems[index],
          count: prevItems[index].count - 1
        };
        return sortItems(updatedItems);
      }
      return prevItems;
    });
  };

  const sortItems = (items) => {
    return items.sort((a, b) => b.count - a.count);
  };

  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card
          key={item.name}
          name={item.name}
          count={item.count}
          handleUpvote={() => handleUpvote(index)}
          handleDownvote={() => handleDownvote(index)}
        />
      ))}
    </div>
  );
};

export default CardList;
