import React from 'react';
import Spinner from '../../img/spinner.gif';

const Spinner = () => {
	return (
		<img
			src={Spinner}
			alt="Loading..."
			style={{ width: '200px', margin: 'auto', display: 'block' }}
		/>
	);
};

export default Spinner;
