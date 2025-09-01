import "./Cart.css";

export default function Cart({
  items,
  onIncrease,
  onDecrease,
  onSetQty,
  onRemove,
  onClear,
  total
}) {
  return (
    <section>
      <h2>Carrito</h2>

      {items.length === 0 ? (
        <div className="cart-empty">Tu carrito está vacío</div>
      ) : (
        <>
          <div className="cart-header">
            <span>Producto</span>
            <span>Precio</span>
            <span>Cantidad</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          {items.map((it) => (
            <div key={it.id} className="cart-row">
              <span>{it.name}</span>
              <span>$ {it.price.toLocaleString("es-CO")}</span>

              <span className="cart-qty">
                <button onClick={() => onDecrease(it.id)}>-</button>
                <input
                  type="number"
                  min="1"
                  value={it.qty}
                  onChange={(e) => onSetQty(it.id, e.target.value)}
                />
                <button onClick={() => onIncrease(it.id)}>+</button>
              </span>

              <span>$ {(it.price * it.qty).toLocaleString("es-CO")}</span>

              <span>
                <button className="cart-remove" onClick={() => onRemove(it.id)}>
                  Eliminar
                </button>
              </span>
            </div>
          ))}

          <div className="cart-total">
            <strong>Total:</strong>
            <strong>$ {total.toLocaleString("es-CO")}</strong>
          </div>

          <button className="cart-clear" onClick={onClear}>Vaciar carrito</button>
        </>
      )}
    </section>
  );
}
