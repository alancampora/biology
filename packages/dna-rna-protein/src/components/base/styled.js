import styled from 'styled-components';

export const StyledNitroBase = styled.div`
	padding: 10px;
	border: 1px solid black;
  border-radius: 10px;
	margin: 10px;
	max-width: 10px;
	min-width: 10px;
`;

export const StyledConnection = styled.div`
	background: ${props => props.color};
	flex: 1;
	height: 10px;
	width: 5px;
	margin: 0 1px;
`;
export const StyledWrapperConnection = styled.div`
	display: flex;
	align-items: center;
	margin: 0 10px;
`;
