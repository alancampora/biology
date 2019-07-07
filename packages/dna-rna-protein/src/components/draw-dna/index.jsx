import React, { useState, useEffect } from 'react';
import Chain from '../chain/index.jsx';
import { StyledDNAWrapper } from './styled';

const nitrogenousBasesMapper = {
	T: {
		self: 'T',
		opposite: 'A',
		connections: 2,
	},
	A: {
		self: 'A',
		opposite: 'T',
		connections: 2,
	},
	C: {
		self: 'C',
		opposite: 'G',
		connections: 3,
	},
	G: {
		self: 'G',
		opposite: 'C',
		connections: 3,
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
			transformChain(baseDnaString, setBaseChain, mapper, element => ({
				base: element.self,
				connections: element.connections,
			}));
			transformChain(baseDnaString, setOppositeChain, mapper, element => ({
				base: element.opposite,
				connections: element.connections,
			}));
		},
		[baseDnaString],
	);

	return [baseChain, oppositeChain];
}

const ChainDrawer = ({ dna }) => {
	const [dna35, dna53] = useDna(dna, nitrogenousBasesMapper);

	return (
		<StyledDNAWrapper>
			<Chain chain={dna35} isTop={true} />
			<Chain chain={dna53} isTop={false} />
		</StyledDNAWrapper>
	);
};

export default ChainDrawer;
