import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';
import './App.css';

function App() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetcItems = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters`
			);
			console.log(result.data);
			setItems(result.data);
			setIsLoading(false);
		};
		fetcItems();
	}, []);

	return (
		<div className="container">
			<Header />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
}

export default App;
