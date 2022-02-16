import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import './App.css';

function App() {
	const [items, setItems] = useState([]);

	return (
		<div className="container">
			<Header />
		</div>
	);
}

export default App;
