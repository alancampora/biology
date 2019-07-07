import React, { useState, useEffect } from 'react';

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
	e.preventDefault();
	const dna = e.target.elements.dna.value.trim();
	setDNA(dna);
};

const Converter = () => {
  const [DNA, RNA, setDNA] = useDNAtoRNA();

	return (
		<form onSubmit={convert(setDNA)}>
			<label>
				{labels.en.DNA} <input type="dna" name="dna" />
			</label>
			<button type="submit">search</button>
      <br />
			<label> {` ${labels.en.RNA} ${RNA}`} </label>
		</form>
	);
};

export default Converter;
