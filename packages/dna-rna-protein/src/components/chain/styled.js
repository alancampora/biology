import styled from 'styled-components';

export const StyledNitroBaseContainer = styled.div`
	display: flex;
`;

export const StyledChainContainer = styled.div`
	display: inline-grid;
`;
export const StyledChain = styled.div`
	height: 5px;
	border-radius: 5px;
	background: #6dd898;
`;

export const StyledWrapperLine = styled.div`
	display: grid;
	grid-template-columns: 10px 100% 10px;
	justify-content: center;
	align-items: center;
`;
export const StyledLine = styled.div`
	background: #6dd898;
	border-radius: 50%;
	padding: 5px;
	height: 20px;
	width: 20px;
	z-index: 1;
	text-align: center;
`;

export const StyledSpacer = styled.div`
	width: 50px;
	height: 10px;
`;

export const StyledAnimation = styled.div`
	display: flex;
  position:absolute;
`;
