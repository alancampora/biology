import React, { useState, useEffect } from 'react';
import { repeat } from 'ramda';
import {
	StyledNitroBase,
	StyledConnection,
	StyledWrapperConnection,
} from './styled';

const Base = ({ element, isTop = true }) =>
	console.log(element) || (
		<div>
			{isTop ? (
				<>
					<StyledNitroBase color={element.color}>
						{' '}
						{element.self.toUpperCase()}{' '}
					</StyledNitroBase>
					<StyledWrapperConnection>
						{repeat(<StyledConnection />, element.connections)}
					</StyledWrapperConnection>
				</>
			) : (
				<>
					<StyledWrapperConnection>
						{repeat(
							<StyledConnection color={element.color} />,
							element.connections,
						)}
					</StyledWrapperConnection>

					<StyledNitroBase color={element.color}>
						{' '}
						{element.self.toUpperCase()}{' '}
					</StyledNitroBase>
				</>
			)}
		</div>
	);

export default Base;
