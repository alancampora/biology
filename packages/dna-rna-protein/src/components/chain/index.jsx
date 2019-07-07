import React, { useState, useEffect } from 'react';
import {
	StyledNitroBase,
	StyledNitroBaseContainer,
	StyledChainContainer,
	StyledChain,
} from './styled';

const Chain = ({ chain, isTop }) => (
  console.log('chain:', chain) || <StyledChainContainer>
		{isTop && <StyledChain />}
		<StyledNitroBaseContainer>
			{chain && chain.map(element => (
				<StyledNitroBase> {element.base.toUpperCase()} </StyledNitroBase>
			))}
		</StyledNitroBaseContainer>
		{!isTop && <StyledChain />}
	</StyledChainContainer>
);

export default Chain;
