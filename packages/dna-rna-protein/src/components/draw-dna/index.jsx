import React, { useState, useEffect } from 'react';
import Chain from '../chain/index.jsx';
import { StyledDNAWrapper } from './styled';

const nitrogenousBasesMapper = {
	T: 'A',
	A: 'T',
	C: 'G',
	G: 'C',
};

function transformChains(baseChain, setReverseChain, mapper) {
	const reverseChain = baseChain
		.split('')
		.map(base => mapper[base.toUpperCase()])
		.join()
		.replace(/,/g, '');

	setReverseChain(reverseChain);
}

function useDna(dna35, mapper) {
	const [dna53, setDna53] = useState('');

	useEffect(
		() => {
			if (!dna35) return;
			transformChains(dna35, setDna53, mapper);
		},
		[dna35],
	);

	return [dna53];
}

const ChainDrawer = ({ dna }) => {
	const [dna53] = useDna(dna, nitrogenousBasesMapper);

	return (
		<StyledDNAWrapper>
			<Chain chain={dna} isTop={true} />
			<Chain chain={dna53} isTop={false} />
		</StyledDNAWrapper>
	);
};

export default ChainDrawer;
