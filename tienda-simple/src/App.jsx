import { useEffect, useMemo, useState } from "react";
import ProductList from "./components/ProductList/ProductList.jsx";
import Cart from "./components/Cart/Cart.jsx";
import PRODUCTS from "./data/products.json"; 

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {

    const timer = setTimeout(() => setProducts(PRODUCTS), 200);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((it) => it.id === product.id);
      if (found) {

        return prev.map((it) =>
          it.id === product.id ? { ...it, qty: it.qty + 1 } : it
        );
      }

      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((it) => it.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: it.qty - 1 } : it))
        .filter((it) => it.qty > 0) 
    );
  };

  const setQty = (id, newQty) => {
    const qty = Number(newQty);
    if (!Number.isFinite(qty)) return;
    setCart((prev) =>
      qty <= 0
        ? prev.filter((it) => it.id !== id)
        : prev.map((it) => (it.id === id ? { ...it, qty } : it))
    );
  };

  const clearCart = () => setCart([]);

  const total = useMemo(
    () => cart.reduce((acc, it) => acc + it.price * it.qty, 0),
    [cart]
  );

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 16 }}>
      <h1>Mini Tienda</h1>

      <ProductList products={products} onAdd={addToCart} />

      <hr />

      <Cart
        items={cart}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onSetQty={setQty}
        onRemove={removeFromCart}
        onClear={clearCart}
        total={total}
      />
    </div>
  );
}
