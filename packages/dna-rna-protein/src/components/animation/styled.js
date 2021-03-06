import styled, { keyframes } from 'styled-components';

const handMove = keyframes`
  50% { 
    -webkit-transform: rotate(-10deg); 
  }
  75%{
    -webkit-transform: rotate(-40deg); 
  }
  `;

const headMove = keyframes`
  50% { 
    -webkit-transform: rotate(-10deg); 
  }
`;

export const Wrapper = styled.div`
	-webkit-animation: ${headMove} 1s ease-in-out infinite;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 2em;
}
`;

export const Scale = styled.div`
	transform: scale(0.4);
	width: 100px;
`;

export const Head = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 30px;
	position: relative;
	background: #6c86d9;
`;

export const Eye = styled.div`
	background: white;
	position: absolute;
	top: 5;
	right: 5;
	width: 30px;
	height: 30px;
	border-radius: 100%;
`;
export const Arm = styled.div`
	position: absolute;
	border-radius: 10px;
	top: 20px;
	left: 20px;
	width: 15px;
	height: 70px;
	border: 5px solid #6c86d9;
	background: #6c86d9;
`;

export const Hand = styled.div`
	position: absolute;
	border-radius: 10px;
	top: 75px;
	left: 20px;
	width: 50px;
	height: 15px;
	border: 5px solid #6c86d9;
	background: #6c86d9;
`;

export const HandPoint = styled.div`
	position: absolute;
	border-radius: 50%;
	top: 70px;
	left: 60px;
	width: 35px;
	height: 35px;
	background: #6c86d9;
`;

export const ArmWrapper = styled.div`
	-webkit-animation: ${handMove} 1s ease-in-out infinite;
`;

export const EyePoint = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 100%;
	position: absolute;
	right: 0px;
	bottom: 7px;
	background: #6c86d9;
`;
