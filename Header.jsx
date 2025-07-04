import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

function Header() {
  const items = useSelector(state => state.cart.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();
  return (
    <header className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Paradise Nursery</h1>
      <nav className="flex gap-4 items-center">
        {location.pathname !== '/products' && <Link to="/products">Products</Link>}
        {location.pathname !== '/cart' && <Link to="/cart">Cart</Link>}
        <div className="relative">
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-white text-green-700 rounded-full px-2 text-sm">{itemCount}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

