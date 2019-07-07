import React, { useState, useEffect } from 'react';
import {
	StyledNitroBase,
	StyledNitroBaseContainer,
	StyledChainContainer,
	StyledChain,
} from './styled';

const Chain = ({ chain, isTop }) => (
	<StyledChainContainer>
		{isTop && <StyledChain />}
		<StyledNitroBaseContainer>
			{chain.split('').map(element => (
				<StyledNitroBase> {element} </StyledNitroBase>
			))}
		</StyledNitroBaseContainer>
		{!isTop && <StyledChain />}
	</StyledChainContainer>
);

export default Chain;
