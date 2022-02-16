import React, { useState } from 'react';

const Search = () => {
	return (
		<section className="search">
			<form>
				<input
					type="text"
					placeholder="Search Characters"
					className="form-control"
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
