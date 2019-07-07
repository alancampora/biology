import React, { useState, useEffect } from 'react';
import Base from '../base/index.jsx';
import { repeat } from 'ramda';
import {
	StyledNitroBase,
	StyledNitroBaseContainer,
	StyledChainContainer,
	StyledChain,
	StyledLine,
	StyledWrapperLine,
} from './styled';

const Line = ({ from, to }) => (
	<StyledWrapperLine>
		<StyledLine>{from}</StyledLine>
		<StyledChain />
		<StyledLine>{to}</StyledLine>
	</StyledWrapperLine>
);

const Chain = ({ chain, isTop = true, from, to }) =>
	chain && (
		<StyledChainContainer>
			{isTop && <Line from={from} to={to} />}

			<StyledNitroBaseContainer>
				{chain.map((element, key) => (
					<Base key={key} element={element} isTop={isTop} />
				))}
			</StyledNitroBaseContainer>

			{!isTop && <Line from={from} to={to} />}
		</StyledChainContainer>
	);

export default Chain;
