import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function openCartHandler() {
    setCartIsOpen(true);
  }
  function closeCartHandler() {
    setCartIsOpen(false);
  }

  useEffect(() => {
    if (cartIsOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [cartIsOpen])

  return (
    <CartProvider>
      {cartIsOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
