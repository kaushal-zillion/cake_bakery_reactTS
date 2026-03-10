import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./components/ProtectedRoute"
import Orders from "./pages/Orders"
import ManagePassword from "./pages/ManagePassword"

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/shop" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<Orders />} />
        </Route>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account/reset-password" element={<ManagePassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App