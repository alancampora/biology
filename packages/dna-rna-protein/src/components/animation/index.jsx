import React from 'react';

import {
	Head,
	Eye,
	Arm,
	Hand,
	HandPoint,
	ArmWrapper,
	EyePoint,
	Wrapper,
	Scale,
	Title,
} from './styled';

const Animation = ({ title }) => (
	<Scale>
		<Wrapper>
			<Title> {title} </Title>
			<Head>
				<Eye>
					<EyePoint />
				</Eye>
				<ArmWrapper>
					<Arm />
					<Hand />
					<HandPoint />
				</ArmWrapper>
			</Head>
		</Wrapper>
	</Scale>
);

export default Animation;
