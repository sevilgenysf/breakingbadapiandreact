import React, { useState } from 'react';

const Search = ({ getQuery }) => {
	const onChange = (q) => {
		getQuery(q);
	};
	return (
		<section className="search">
			<form>
				<input
					type="text"
					placeholder="Search Characters"
					className="form-control"
					onChange={(e) => onChange(e.target.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
