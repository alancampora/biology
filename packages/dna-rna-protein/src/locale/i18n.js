const DEFAULT_LOCALE = 'en-US';

const i18n = {
	'en-US': {
		RNA: 'RNA',
		DNA: 'DNA',
		3: "3'",
		5: "5'",
		RNA_POLYMERASE: 'RNA Polymerase',
	},
	es: {
		DNA: 'ADN',
		3: "3'",
		5: "5'",
		RNA: 'ARN',
		RNA_POLYMERASE: 'ARN Polimeraza',
	},
};

export const getLabel = (locale = DEFAULT_LOCALE) =>
	i18n[locale] ? i18n[locale] : i18n[DEFAULT_LOCALE];
