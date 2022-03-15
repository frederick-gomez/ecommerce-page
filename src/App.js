import { useState } from 'react';
import './App.scss';
import Nav from './components/Navigation/Nav';
import Slider from './components/Slider';
import ItemInfo from './components/ItemInfo';
import CartContext from './components/Context/cart-context';
import GalleryModal from './components/GalleryModal';

function App() {
	const [cartAmount, setCartAmount] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const updateAmount = (amount) => {
		setCartAmount(amount);
	};

	const toggleModal = () => {
		if (!isModalOpen) {
			setIsModalOpen(true);
		} else {
			setIsModalOpen(false);
		}
	};

	return (
		<CartContext.Provider value={cartAmount}>
			<Nav />
			<main className='main-content'>
				<Slider toggleModal={toggleModal} />
				{isModalOpen ? <GalleryModal closeModal={toggleModal} /> : null}
				<ItemInfo onClick={updateAmount} />
			</main>
		</CartContext.Provider>
	);
}

export default App;
