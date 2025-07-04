import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';

const plants = [
  { id: 1, name: 'Snake Plant', price: 10, category: 'Air Purifying', image: '/images/snake.jpg' },
  { id: 2, name: 'Peace Lily', price: 15, category: 'Flowering', image: '/images/peace.jpg' },
  { id: 3, name: 'Aloe Vera', price: 12, category: 'Succulent', image: '/images/aloe.jpg' },
  { id: 4, name: 'Spider Plant', price: 8, category: 'Air Purifying', image: '/images/spider.jpg' },
  { id: 5, name: 'Jade Plant', price: 14, category: 'Succulent', image: '/images/jade.jpg' },
  { id: 6, name: 'Orchid', price: 18, category: 'Flowering', image: '/images/orchid.jpg' },
];

function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div>
      <Header />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {plants.map(plant => {
          const inCart = cartItems.find(item => item.id === plant.id);
          return (
            <div key={plant.id} className="border rounded-lg p-4 shadow">
              <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl mt-2">{plant.name}</h2>
              <p>${plant.price}</p>
              <button onClick={() => dispatch(addToCart(plant))} disabled={inCart} className={`mt-2 px-4 py-1 rounded ${inCart ? 'bg-gray-400' : 'bg-green-600 text-white'}`}>{inCart ? 'Added' : 'Add to Cart'}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListing;

