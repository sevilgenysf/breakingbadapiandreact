import React, { useState } from 'react';

const Search = () => {
	const [text, setText] = useState('');

	return (
		<section className="search">
			<form>
				<input
					type="text"
					placeholder="Search Characters"
					className="form-control"
					value={text}
					onChange={(e) => setText(e.target.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
