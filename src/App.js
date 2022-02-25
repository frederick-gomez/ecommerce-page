import './App.scss';
import Nav from './components/Navigation/Nav';
import Slider from './components/Slider';
import ItemInfo from './components/ItemInfo';

function App() {
	return (
		<>
			<Nav />
			<main>
				<Slider />
				<ItemInfo />
			</main>
		</>
	);
}

export default App;
