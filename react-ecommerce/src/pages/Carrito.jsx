import { useCarrito } from '../context/CarritoContext'
import { Link } from 'react-router-dom'

export default function Carrito() {
  const { carrito, eliminarProducto, total } = useCarrito()

  return (
    <div>
      <h1>Tu Carrito</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <div className="productos-grid">
            {carrito.map((p, i) => (
              <div key={i} className="card">
                <img src={p.imagen} alt={p.nombre} />
                <h3>{p.nombre}</h3>
                <p>${p.precio}</p>
                <button onClick={() => eliminarProducto(i)}>❌ Quitar</button>
              </div>
            ))}
          </div>
          <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Total: ${total}</h2>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/orden">
              <button>🧾 Finalizar compra</button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
