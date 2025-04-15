import { createContext, useContext, useState } from 'react'

const CarritoContext = createContext()
export const useCarrito = () => useContext(CarritoContext)

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto])
  }

  const eliminarProducto = (index) => {
    const nuevoCarrito = [...carrito]
    nuevoCarrito.splice(index, 1)
    setCarrito(nuevoCarrito)
  }

  const total = carrito.reduce((acc, item) => acc + item.precio, 0)

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, total }}>
      {children}
    </CarritoContext.Provider>
  )
}
