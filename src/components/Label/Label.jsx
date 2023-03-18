import styled from 'styled-components';

const Label = styled.label`
	display: flex;
	align-items: center;
	background: var(--input-bg);
	border-radius: 0.35rem;
	padding: 0.75rem 1rem;
	width: min(${props => props.width || '500px'}, 100%);
`;

export default Label;
