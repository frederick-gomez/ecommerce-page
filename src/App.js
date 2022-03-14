import { useState } from 'react';
import './App.scss';
import Nav from './components/Navigation/Nav';
import Slider from './components/Slider';
import ItemInfo from './components/ItemInfo';
import CartContext from './components/Context/cart-context';

function App() {
	const [cartAmount, setCartAmount] = useState(0);
	const updateAmount = (amount) => {
		setCartAmount(amount);
	};

	return (
		<CartContext.Provider value={cartAmount}>
			<Nav />
			<main className='main-content'>
				<Slider />
				<ItemInfo onClick={updateAmount} />
			</main>
		</CartContext.Provider>
	);
}

export default App;
