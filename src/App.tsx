import { Routes, Route } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import News from './pages/News'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/ALPHABox">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />          
          <Route path=":name" element={<Product />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
