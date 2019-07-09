import React, { useState, useEffect } from 'react';
import { getLabel } from './i18n';

function useLabelClient(getLabel) {
	const [labelClient, setLabelClient] = useState('test');

	useEffect(() => {
		setLabelClient(getLabel(navigator.language));
	});

	return [labelClient];
}

const LabelClientContext = React.createContext();
const { Provider, Consumer } = LabelClientContext;


function LabelClientProvider({ children }) {
	const [labelClient] = useLabelClient(getLabel);

	return <Provider value={labelClient}>{children}</Provider>;
}

export {
	LabelClientProvider as Provider,
	Consumer,
	LabelClientContext as Context,
};
