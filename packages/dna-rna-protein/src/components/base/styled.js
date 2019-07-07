import styled from 'styled-components';

export const StyledNitroBase = styled.div`
	background: ${props => props.color};
	padding: 10px;
  border-radius: 10px;
	margin: 10px;
	max-width: 10px;
	min-width: 10px;
`;

export const StyledConnection = styled.div`
	background: #42424252;
	flex: 1;
	height: 10px;
	max-width: 3px;
	margin: 0 1px;
`;
export const StyledWrapperConnection = styled.div`
	display: flex;
	align-items: center;
  justify-content:center;
	margin: 0 10px;
`;
