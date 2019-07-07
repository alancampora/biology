import React, { useState, useEffect } from 'react';
import ChainDrawer from './components/chain-drawer/index.jsx';


const DNA_MAPPER = {
	T: {
		self: 'T',
		opposite: 'A',
		connections: 2,
		color: '#fdf3b8',
	},
	A: {
		self: 'A',
		opposite: 'T',
		connections: 2,
		color: '#f8c898',
	},
	C: {
		self: 'C',
		opposite: 'G',
		connections: 3,
		color: '#c9e0af',
	},
	G: {
		self: 'G',
		opposite: 'C',
		connections: 3,
		color: '#c8e9f2',
	},
};

const RNA_MAPPER = {
	T: {
		self: 'T',
		opposite: 'A',
		connections: 2,
		color: '#fdf3b8',
	},
	A: {
		self: 'A',
		opposite: 'U',
		connections: 2,
		color: '#f8c898',
	},
	C: {
		self: 'C',
		opposite: 'G',
		connections: 3,
		color: '#c9e0af',
	},
	G: {
		self: 'G',
		opposite: 'C',
		connections: 3,
		color: '#c8e9f2',
	},
  U:{
		self: 'U',
		opposite: 'A',
		connections: 2,
		color: '#fdf3b8',
  }
};

const convert = setDna => e => {
	setDna(e.target.value.trim());
};

const Converter = () => {
	const [dna, setDna] = useState('');

	return (
		<div>
			<form>
				<input autocomplete="off" value={dna} onChange={convert(setDna)} />
				<br />
			</form>
			<ChainDrawer dna={dna} mapper={DNA_MAPPER}/>
			<ChainDrawer dna={dna} mapper={RNA_MAPPER}/>
		</div>
	);
};

export default Converter;
