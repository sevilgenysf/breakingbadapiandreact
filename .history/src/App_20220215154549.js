import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import axios from 'axios';
import './App.css';

function App() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {});

	return (
		<div className="container">
			<Header />
		</div>
	);
}

export default App;
