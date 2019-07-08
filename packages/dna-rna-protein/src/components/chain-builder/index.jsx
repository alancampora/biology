import React, { useState, useEffect } from 'react';
import Chain from '../chain/index.jsx';
import { useGenerateChains } from '../../hooks';
import { StyledDNAWrapper } from './styled';

const ChainBuilder = ({ dna, mapper, animation }) => {
	const [baseChain, reverseChain] = useGenerateChains(dna, mapper);

	return (
		<StyledDNAWrapper>
			<Chain from="'3" to="'5" chain={baseChain} isTop={true} />
			<Chain
				from="'5"
				to="'3"
				chain={reverseChain}
				isTop={false}
				animation={animation}
			/>
		</StyledDNAWrapper>
	);
};

export default ChainBuilder;
