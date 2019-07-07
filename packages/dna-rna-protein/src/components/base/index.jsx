import React, { useState, useEffect } from 'react';
import { repeat } from 'ramda';
import {
	StyledNitroBase,
	StyledConnection,
	StyledWrapperConnection,
} from './styled';

const Base = ({ element, isTop = true }) => (
	<div>
		{isTop && (
			<>
				<StyledNitroBase> {element.base.toUpperCase()} </StyledNitroBase>
				<StyledWrapperConnection>
					{repeat(
						<StyledConnection color={element.color} />,
						element.connections,
					)}
				</StyledWrapperConnection>
			</>
		)}
		{!!isTop && (
			<>
				<StyledWrapperConnection>
					{repeat(
						<StyledConnection color={element.color} />,
						element.connections,
					)}
				</StyledWrapperConnection>

				<StyledNitroBase> {element.base.toUpperCase()} </StyledNitroBase>
			</>
		)}
	</div>
);

export default Base;
