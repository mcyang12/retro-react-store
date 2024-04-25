import React from 'react';
import MediaItem from './MediaItem';

function MediaList({ mediaItems, addToCart, removeFromCart, addToFavorite }) {
  return (
    <div className="media-list">
      {mediaItems.map((item) => (
        <MediaItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorite={addToFavorite} />
      ))}
    </div>
  );
}

export default MediaList;