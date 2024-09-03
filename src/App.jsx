import React from 'react'
import './App.css'
import Cart from './Cart'
import "bootstrap/dist/css/bootstrap.min.css"
import { CartProvider } from './CartContext'
import logo from './logo.svg'

function App() {

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <nav>
            <ul className='d-flex'>
              <li style={{ listStyleType: "none" }}>
                <img className="image" src={logo} />
              </li>
              <li style={{ listStyleType: "none", position: "absolute", top: 15, left: 140 }}>
                <h1>Cart</h1>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr style={{ marginTop: 0, borderWidth: 3, color: '#ff1a8c' }}></hr>
      <CartProvider>
        <Cart />
      </CartProvider>
    </>
  )
}

export default App
