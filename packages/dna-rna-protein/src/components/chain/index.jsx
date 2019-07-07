import React, { useState, useEffect } from 'react';
import Base from '../base/index.jsx';
import { repeat } from 'ramda';
import {
	StyledNitroBase,
	StyledNitroBaseContainer,
	StyledChainContainer,
	StyledChain,
} from './styled';

const Chain = ({ chain, isTop }) =>
	console.log('chain:', chain) || (
		<StyledChainContainer>
			{isTop && <StyledChain />}

			<StyledNitroBaseContainer>
				{chain && chain.map(element => <Base element={element} isTop={isTop}/>)}
			</StyledNitroBaseContainer>

			{!isTop && <StyledChain />}
		</StyledChainContainer>
	);

export default Chain;
