import "./ProductItem.css";

export default function ProductItem({ product, onAdd }) {
  return (
    <div className="pi-card">
      <div className="pi-name">{product.name}</div>
      <div className="pi-price">$ {product.price.toLocaleString("es-CO")}</div>
      <button className="pi-btn" onClick={() => onAdd(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}
