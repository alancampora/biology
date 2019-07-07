import {useState, useEffect} from 'react';
function transformChain(baseChain, setChain, mapper, getBase) {
	setChain(
		baseChain
			.split('')
			.map(base => mapper[base.toUpperCase()])
			.map(getBase),
	);
}

export function useGenerateChains(baseDnaString, mapper) {
	const [baseChain, setBaseChain] = useState([]);
	const [oppositeChain, setOppositeChain] = useState([]);

	useEffect(
		() => {
			transformChain(baseDnaString, setBaseChain, mapper, element => element);
			transformChain(baseDnaString, setOppositeChain, mapper, element => ({
				...mapper[element.opposite],
			}));
		},
		[baseDnaString],
	);

	return [baseChain, oppositeChain];
}
