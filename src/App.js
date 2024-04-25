import React, { useState, useReducer } from 'react';
import MediaList from './MediaList';
import mediaItems from './mediaItems';
import Home from './Home';
import MediaDetail from './MediaDetail';
import Message from './Message';

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(`${item.title} added to cart.`);
  };

  const removeFromCart = (itemRemove) => {
    setCart(cart.filter(item => item.id !== itemRemove.id));
    console.log(`Item removed from cart.`);
  };

  const addToFavorite = (itemFavorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: itemFavorite, favorites });
    console.log(`Item added to favorite.`);
  };

  return (
    <Router>
      <body>
      <div className="App">
        <h1>Retro Media Store</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/media/:type/:id">
            <MediaDetail mediaItems={mediaItems} addToCart={addToCart} addToFavorite={addToFavorite} />
          </Route>
        </Switch>
        <MediaList mediaItems={mediaItems} addToCart={addToCart} />
        <Message />
      </div>
      </body>
    </Router>
  );
}

export default App;
