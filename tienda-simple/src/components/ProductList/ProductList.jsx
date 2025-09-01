import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem.jsx";

export default function ProductList({ products, onAdd }) {
  if (products.length === 0) {
    return <p>Cargando productos…</p>;
  }

  return (
    <section>
      <h2>Productos</h2>
      <div className="pl-grid">
        {products.map((p) => (
          <ProductItem key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
