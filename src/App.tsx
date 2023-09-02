import { Routes, Route } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/ALPHABox">
          <Route index element={<Home />} />
          <Route path=":name" element={<Product />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
