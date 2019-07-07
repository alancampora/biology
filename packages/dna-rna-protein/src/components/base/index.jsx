import React, { useState, useEffect } from 'react';
import { repeat } from 'ramda';
import {
	StyledNitroBase,
	StyledConnection,
	StyledWrapperConnection,
} from './styled';

const Connection = ({ color, connections }) => (
	<StyledWrapperConnection>
		{repeat(<StyledConnection />, connections)}
	</StyledWrapperConnection>
);

const NitroBase = ({ color, name }) => (
	<StyledNitroBase color={color}> {name.toUpperCase()} </StyledNitroBase>
);

const Base = ({ element, isTop = true }) => (
	<div>
		{isTop ? (
			<>
				<NitroBase color={element.color} name={element.self} />
				<Connection connections={element.connections} />
			</>
		) : (
			<>
				<Connection connections={element.connections} />
				<NitroBase color={element.color} name={element.self} />
			</>
		)}
	</div>
);

export default Base;
