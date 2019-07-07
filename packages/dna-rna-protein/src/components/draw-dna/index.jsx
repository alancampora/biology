import React, { useState, useEffect } from 'react';
import Chain from '../chain/index.jsx';
import { StyledDNAWrapper } from './styled';

const dna35_dna53 = {
	T: 'A',
	A: 'T',
	C: 'G',
	G: 'C',
};

function dna35ToDna53(dna35, setDna53) {
	const dna53 = dna35
		.split('')
		.map(base => dna35_dna53[base.toUpperCase()])
		.join()
		.replace(/,/g, '');

	setDna53(dna53);
}

function useDna(dna35) {
	const [dna53, setDna53] = useState('');

	useEffect(
		() => {
			if (!dna35) return;
			dna35ToDna53(dna35, setDna53);
		},
		[dna35],
	);

	return [dna53];
}

const DrawDNA = ({ dna }) => {
	const [dna53] = useDna(dna);

	return (
		<StyledDNAWrapper>
			<Chain chain={dna} isTop={true} />
			<Chain chain={dna53} isTop={false} />
		</StyledDNAWrapper>
	);
};

export default DrawDNA;
