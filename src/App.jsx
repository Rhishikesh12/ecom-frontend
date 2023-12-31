import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
	const user = true; // Replace with your actual user logic

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:category' element={<ProductList />} />
				<Route path='/product/:id' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
				<Route
					path='/register'
					element={user ? <Navigate to='/' /> : <Register />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
