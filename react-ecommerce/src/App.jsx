import { Routes, Route, Link } from 'react-router-dom'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'
import Orden from './pages/Orden'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Productos</Link> |{' '}
        <Link to="/carrito">Carrito</Link> |{' '}
        <Link to="/orden">Orden</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/orden" element={<Orden />} />
      </Routes>
    </div>
  )
}
