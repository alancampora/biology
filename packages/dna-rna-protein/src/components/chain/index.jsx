import React, { useState, useEffect } from 'react';
import Base from '../base/index.jsx';
import { repeat } from 'ramda';
import {
	StyledNitroBase,
	StyledNitroBaseContainer,
	StyledChainContainer,
	StyledChain,
} from './styled';

const Chain = ({ chain, isTop = true }) =>
	console.log('chain:', chain, 'isTop:', isTop) || (
		<StyledChainContainer>
			{isTop && <StyledChain />}

			<StyledNitroBaseContainer>
				{chain &&
					chain.map((element, key) => (
						<Base key={key} element={element} isTop={isTop} />
					))}
			</StyledNitroBaseContainer>

			{!isTop && <StyledChain />}
		</StyledChainContainer>
	);

export default Chain;
