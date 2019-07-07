import React, { useState, useEffect } from 'react';
import ChainBuilder from './components/chain-builder/index.jsx';


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
				DNA 3'5' Chain: <input autocomplete="off" value={dna} onChange={convert(setDna)} />
				<br />
			</form>
      <div> DNA chain </div>  
			<ChainBuilder dna={dna} mapper={DNA_MAPPER}/>
      <div> RNA chain </div>  
			<ChainBuilder dna={dna} mapper={RNA_MAPPER}/>
		</div>
	);
};

export default Converter;
