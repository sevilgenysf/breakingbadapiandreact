import React, { useState } from 'react';

const Search = () => {
	return (
		<section className="search">
			<form>
				<input
					type="text"
					placeholder="Search Characters"
					className="form-control"
				/>
			</form>
		</section>
	);
};

export default Search;
