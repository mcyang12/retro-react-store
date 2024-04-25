import React from 'react';

function MediaItem({ item, addToCart, removeFromCart, addToFavorite }) {
  const { id, title, type } = item;

  return (
    <div className="media-item">
      <h3>{title}</h3>
      <p>Type: {type}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
      <button onClick={() => addToFavorite(id)}>Add to Favorite</button>
    </div>
  );
}

export default MediaItem;
