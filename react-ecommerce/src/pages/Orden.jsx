import { useCarrito } from '../context/CarritoContext'

export default function Orden() {
  const { carrito, total } = useCarrito()

  return (
    <div>
      <h1>Resumen de tu Orden</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en tu orden.</p>
      ) : (
        <>
          <div className="productos-grid">
            {carrito.map((p, i) => (
              <div key={i} className="card">
                <img src={p.imagen} alt={p.nombre} />
                <h3>{p.nombre}</h3>
                <p>${p.precio}</p>
              </div>
            ))}
          </div>
          <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Total a pagar: ${total}</h2>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>¡Gracias por tu compra! 🥳</p>
        </>
      )}
    </div>
  )
}
