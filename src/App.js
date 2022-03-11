import { useState } from 'react';
import './App.scss';
import Nav from './components/Navigation/Nav';
import Slider from './components/Slider';
import ItemInfo from './components/ItemInfo';

function App() {
	const [cartAmount, setCartAmount] = useState();

	const logAmount = (amount) => {
		setCartAmount(amount);
	};

	return (
		<>
			<Nav amount={cartAmount} />
			<main>
				<Slider />
				<ItemInfo onClick={logAmount} />
			</main>
		</>
	);
}

export default App;
