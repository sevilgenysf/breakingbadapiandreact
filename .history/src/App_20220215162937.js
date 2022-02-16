import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';
import './App.css';

function App() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');

	useEffect(() => {
		const fetcItems = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
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
			<Search setQuery={setQuery} />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
}

export default App;
