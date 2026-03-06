import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ProductProvider from './context/ProductProvider.tsx'
import CartProvider from './context/CartProvider.tsx'
import AuthProvider from './context/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <ProductProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ProductProvider>
    </AuthProvider>
)
