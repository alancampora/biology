import React from 'react';

import { Wrapper, Bubble , Title} from './styled';

const Animation = ({ title }) => (
		<Wrapper>
			<Title> {title} </Title>
			<Bubble />
		</Wrapper>
);

export default Animation;
