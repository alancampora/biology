import React, { useState, useEffect } from 'react';
import DrawDNA from './components/draw-dna/index.jsx';

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
	const [RNA, setRNA] = useState('');
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

const Converter = () => {
	const [DNA, RNA, setDNA] = useDNAtoRNA();

	return (
		<div>
			<form>
				<input
					type="dna"
					name="dna"
					autocomplete="off"
					value={DNA}
					onChange={convert(setDNA)}
				/>
				<br />
				<label> {` ${labels.en.RNA} ${RNA}`} </label>
			</form>
			<DrawDNA dna={DNA} />
		</div>
	);
};

export default Converter;
