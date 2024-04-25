import React, { useState, useReducer } from 'react';
import { Router, Route } from 'react-router-dom';
import MediaList from './MediaList';
import mediaItems from './mediaItems';
import Home from './Home';
import MediaDetail from './MediaDetail';
import Message from './Message';

//YouTube channel assist: Web Dev Simplified

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(`${item.title} added to cart.`);
  };

  const removeFromCart = (itemRemove) => {
    setCart(cart.filter(item => item !== itemRemove));
    console.log(`Item removed from cart.`);
  };
  //variable coordination...not sure if favorites placement is correct//
  const addToFavorite = (itemFavorite, favorites) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: itemFavorite });
    console.log(`Item added to favorite.`);
  };

  return (
    <Router>
      <body>
      <div className="App">
        <h1>Retro Media Store</h1>
          <Route path="/" exact component={Home} />
          <Route path="/media/:type/:id">
            <MediaDetail mediaItems={mediaItems} addToCart={addToCart} addToFavorite={addToFavorite} />
          </Route>
        <MediaList mediaItems={mediaItems} addToCart={addToCart} removeFromCart={removeFromCart} />
        <Message />
      </div>
      </body>
    </Router>
  );
}

export default App;
