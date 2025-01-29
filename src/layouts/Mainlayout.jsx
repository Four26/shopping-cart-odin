import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrimarySearchAppBar from "../components/Navbar";
import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from '../components/Cart';

const MainLayout = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState([]);

    const fetchProduct = async (query) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            const filteredProducts = data.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setProducts(filteredProducts);

        } catch (error) {
            alert("Error fetching data", error);
        }
    }

    useEffect(() => {
        fetchProduct(searchQuery);
    }, [searchQuery]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    }

    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
    }

    return (
        <div>
            <PrimarySearchAppBar setSearchQuery={setSearchQuery} cartItems={cartItems} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop products={products} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem} />} />
            </Routes>
        </div>
    )
}

export default MainLayout;
