import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
        <p>Total Plants: {totalItems}</p>
        <p>Total Cost: ${totalPrice}</p>
        <div className="grid gap-4 mt-4">
          {items.map(item => (
            <div key={item.id} className="border p-4 rounded shadow flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => dispatch(increaseQuantity(item.id))} className="bg-green-600 px-2 rounded text-white">+</button>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} className="bg-yellow-500 px-2 rounded text-white">-</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-600 px-2 rounded text-white">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button onClick={() => navigate('/products')} className="bg-blue-600 text-white px-4 py-2 rounded">Continue Shopping</button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded">Checkout (Coming Soon)</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;