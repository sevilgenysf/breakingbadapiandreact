import React, { useState } from 'react';

const Search = ({ getQuery }) => {
	const [text, setText] = useState('');

	const onChange = (q) => {
		setText(q);
		getQuery(q);
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
