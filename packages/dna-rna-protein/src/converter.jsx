import React, { useState, useEffect, useContext } from 'react';
import ChainBuilder from './components/chain-builder/index.jsx';
import Form from './components/form/index.jsx';
import Animation from './components/bubble/index.jsx';
import { Wrapper } from './styled';
import * as LabelClient from './locale/index.jsx';

const DNA_MAPPER = {
	T: {
		self: 'T',
		opposite: 'A',
		connections: 2,
		color: '#fdf3b8',
	},
	A: {
		self: 'A',
		opposite: 'T',
		connections: 2,
		color: '#f8c898',
	},
	C: {
		self: 'C',
		opposite: 'G',
		connections: 3,
		color: '#c9e0af',
	},
	G: {
		self: 'G',
		opposite: 'C',
		connections: 3,
		color: '#c8e9f2',
	},
};

const RNA_MAPPER = {
	T: {
		self: 'T',
		opposite: 'A',
		connections: 2,
		color: '#fdf3b8',
	},
	A: {
		self: 'A',
		opposite: 'U',
		connections: 2,
		color: '#f8c898',
	},
	C: {
		self: 'C',
		opposite: 'G',
		connections: 3,
		color: '#c9e0af',
	},
	G: {
		self: 'G',
		opposite: 'C',
		connections: 3,
		color: '#c8e9f2',
	},
	U: {
		self: 'U',
		opposite: 'A',
		connections: 2,
		color: '#fdf3b8',
	},
};

const convert = setDna => e => {
	setDna(e.target.value.trim());
};

const Converter = () => {
	const i18n = useContext(LabelClient.Context);
	const [dna, setDna] = useState('');

	return (
		<Wrapper>
			<Form
				label={`${i18n['DNA']} ${i18n['3']} ${i18n['5']}`}
				value={dna}
				onChange={convert(setDna)}
			/>
			{dna && (
				<>
					<div> DNA </div>
					<ChainBuilder dna={dna} mapper={DNA_MAPPER} />
					<div> RNA </div>
					<ChainBuilder
						dna={dna}
						mapper={RNA_MAPPER}
						animation={<Animation title={`${i18n['RNA_POLYMERASE']}`} />}
					/>
				</>
			)}
		</Wrapper>
	);
};

export default Converter;
