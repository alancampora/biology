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

const Animation = () => (
	<Scale>
		<Wrapper>
			<Title> ARN POLYMERASE </Title>
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
