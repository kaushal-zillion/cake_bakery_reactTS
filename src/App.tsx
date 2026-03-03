import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
// import About from "./pages/about"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/shop" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App