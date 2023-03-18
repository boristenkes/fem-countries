import styled from 'styled-components';

const Input = styled.input`
	background: var(--input-bg);
	border: none;
	font-family: var(--ff-primary);
	font-size: 1.15rem;
	color: var(--text-clr);
	padding-block: 0.5rem;

	&:focus {
		outline: none;
	}
	&::placeholder {
		color: inherit;
	}
`;

export default Input;
