import React, { useState, useEffect } from 'react';
import { StyledInput } from './styled';

const Form = ({ label, onChange, value }) => (
	<form>
		{label} <StyledInput autocomplete="off" value={value} onChange={onChange} />
		<br />
	</form>
);

export default Form;
