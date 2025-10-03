import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import Account from './components/Account'
import './App.css'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Cart />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
