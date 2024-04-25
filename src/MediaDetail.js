import React from 'react';
import MediaItem from './MediaItem';

function MediaDetail({ mediaItems, addToCart, addToFavorite }) {
  const { type, id } = useParams();
  const item = mediaItems.find(item => item.id === parseInt(id));

  return (
    <div>
      <h2>Media Detail</h2>
      {item && <MediaItem item={item} addToCart={addToCart} addToFavorite={addToFavorite} />}
    </div>
  );
}

export default MediaDetail;
