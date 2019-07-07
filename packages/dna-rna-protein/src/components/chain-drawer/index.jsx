import React, { useState, useEffect } from 'react';
import Chain from '../chain/index.jsx';
import { useGenerateChains } from '../../hooks';
import { StyledDNAWrapper } from './styled';

const ChainDrawer = ({ dna, mapper }) => {
	const [baseChain, reverseChain] = useGenerateChains(dna, mapper);

	return (
		<StyledDNAWrapper>
			<Chain chain={baseChain} isTop={true} />
			<Chain chain={reverseChain} isTop={false} />
		</StyledDNAWrapper>
	);
};

export default ChainDrawer;
