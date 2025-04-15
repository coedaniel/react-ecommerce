import { useState } from 'react'
import productos from '../productos'
import { useCarrito } from '../context/CarritoContext'

export default function Productos() {
  const { agregarProducto } = useCarrito()
  const [cantidades, setCantidades] = useState({})

  const cambiarCantidad = (id, valor) => {
    setCantidades({ ...cantidades, [id]: parseInt(valor) })
  }

  const agregar = (producto) => {
    const cantidad = cantidades[producto.id] || 1
    for (let i = 0; i < cantidad; i++) {
      agregarProducto(producto)
    }
  }

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="productos-grid">
        {productos.map((p) => (
          <div key={p.id} className="card">
            <img src={p.imagen} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
            <input
              type="number"
              min="1"
              value={cantidades[p.id] || 1}
              onChange={(e) => cambiarCantidad(p.id, e.target.value)}
              style={{ width: '50px', marginBottom: '10px' }}
            />
            <button onClick={() => agregar(p)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  )
}
