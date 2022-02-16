import React, { useState } from 'react';

const Search = ({ setQuery }) => {
	const [text, setText] = useState('');

	const onChange = (q) => {
		setText(q);
		setQuery(q);
	};
	return (
		<section className="search">
			<form>
				<input
					type="text"
					placeholder="Search Characters"
					className="form-control"
					value={text}
					onChange={(e) => onChange(e.target.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
