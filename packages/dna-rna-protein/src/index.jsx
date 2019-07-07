import React from 'react';
import ReactDOM from 'react-dom';
import { StyledTitle, GlobalStyles } from './styled';
import Converter from './converter.jsx';

/* DNA is composed by nitrogenous bases
 * adenine thymine guanine cytosine
 */

/*
adenine: uracil
thymine: adenine
guanine: cytosine
cytosine: guanine


DNA: A T G C A T A G G

RNA: U A C G U A U C C
*/

const App = () => (
	<div>
    <GlobalStyles />
		<Converter />
	</div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
