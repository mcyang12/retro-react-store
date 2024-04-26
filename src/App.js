import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MediaList from './MediaList';
import MediaItem from './MediaItem';

function App() {
  const [mediaItems, setMediaItems] = useState([
    { id: 1, type: 'VHS', title: 'Back to the Future', isFavorite: false },
    { id: 2, type: 'DVD', title: 'The Matrix', isFavorite: false },
    { id: 3, type: 'CD', title: 'Thriller - Michael Jackson', isFavorite: false }
  ]);

  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = (item) => {
    setCart([...cart, item]);
    setMessage(`Added ${item.title} to the cart.`);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
    setMessage(`Removed ${item.title} from cart.`);
  };

  const addToFavorite = (item) => {
    const updatedItems = mediaItems.map(mediaItem =>
      mediaItem.id === item.id ? { ...mediaItem, isFavorite: !mediaItem.isFavorite } : mediaItem
    );
    setMediaItems(updatedItems);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/vhs'>VHS</Link>
          <Link to='/dvd'>DVD</Link>
          <Link to='/cd'>CD</Link>
        </nav>
        {message && <div>{message}</div>}
        <h1>Retro Media Store</h1>
        <Routes>
          <Route path='/' element={<MediaList mediaItems={mediaItems} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorite={addToFavorite} />} exact />
          <Route path='/vhs' element={<MediaList mediaItems={mediaItems.filter(item => item.type === 'VHS')} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorite={addToFavorite} />} />
          <Route path='/dvd' element={<MediaList mediaItems={mediaItems.filter(item => item.type === 'DVD')} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorite={addToFavorite} />} />
          <Route path='/cd' element={<MediaList mediaItems={mediaItems.filter(item => item.type === 'CD')} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorite={addToFavorite} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
