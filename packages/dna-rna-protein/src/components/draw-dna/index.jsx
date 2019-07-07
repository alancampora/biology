import React, { useState, useEffect } from 'react';
import Chain from '../chain/index.jsx';
import { StyledDNAWrapper } from './styled';

const nitrogenousBasesMapper = {
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

function transformChain(baseChain, setChain, mapper, getBase) {
	setChain(
		baseChain
			.split('')
			.map(base => mapper[base.toUpperCase()])
			.map(getBase),
	);
}

function useDna(baseDnaString, mapper) {
	const [baseChain, setBaseChain] = useState([]);
	const [oppositeChain, setOppositeChain] = useState([]);

	useEffect(
		() => {
			transformChain(baseDnaString, setBaseChain, mapper, element => element);
			transformChain(baseDnaString, setOppositeChain, mapper, element => ({
				...mapper[element.opposite],
			}));
		},
		[baseDnaString],
	);

	return [baseChain, oppositeChain];
}

const ChainDrawer = ({ dna }) => {
	const [dna35, dna53] = useDna(dna, nitrogenousBasesMapper);
  console.log('35:',dna35);
  console.log('53:',dna53);

	return (
		<StyledDNAWrapper>
			<Chain chain={dna35} isTop={true} />
			<Chain chain={dna53} isTop={false} />
		</StyledDNAWrapper>
	);
};

export default ChainDrawer;
