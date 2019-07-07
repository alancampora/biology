import React, { useState, useEffect } from 'react';
import {
	StyledNitroBase,
	StyledNitroBaseContainer,
	StyledChainContainer,
	StyledChain,
	StyledDNAWrapper,
} from './styled';

const labels = {
	en: {
		title: 'Welcome to DNA conversion',
		DNA: 'DNA',
		RNA: 'RNA',
	},
};

const ADN_ARN = {
	T: 'A',
	A: 'U',
	C: 'G',
	G: 'C',
};

function DNAToRNA(DNA, setRNA) {
	const RNA = DNA.split('')
		.map(base => ADN_ARN[base.toUpperCase()])
		.join()
		.replace(/,/g, '');

	setRNA(RNA);
}

function useDNAtoRNA() {
	const [RNA, setRNA] = useState('TAC TAC TAC');
	const [DNA, setDNA] = useState('');

	useEffect(
		() => {
			DNAToRNA(DNA, setRNA);
		},
		[DNA],
	);

	return [DNA, RNA, setDNA];
}

const convert = setDNA => e => {
	const dna = e.target.value.trim();
	setDNA(dna);
};

const DrawDNA = ({ dna, arn }) => {
	return (
		<StyledDNAWrapper>
			<StyledChainContainer>
				<StyledChain />
				<StyledNitroBaseContainer>
					{dna.split('').map(element => (
						<StyledNitroBase> {element} </StyledNitroBase>
					))}
				</StyledNitroBaseContainer>
			</StyledChainContainer>

			<StyledChainContainer>
				<StyledNitroBaseContainer>
					{arn.split('').map(element => (
						<StyledNitroBase> {element} </StyledNitroBase>
					))}
				</StyledNitroBaseContainer>
				<StyledChain />
			</StyledChainContainer>
		</StyledDNAWrapper>
	);
};

const Converter = () => {
	const [DNA, RNA, setDNA] = useDNAtoRNA();

	return (
		<div>
			<form>
				<input type="dna" name="dna" value={DNA} onChange={convert(setDNA)} />
				<br />
				<label> {` ${labels.en.RNA} ${RNA}`} </label>
			</form>

			<DrawDNA dna={DNA} arn={RNA} />
		</div>
	);
};

export default Converter;
