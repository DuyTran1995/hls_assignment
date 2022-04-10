import styled from "styled-components";

const ContainerStyled = styled.div`
	max-width: 1140px;
	width: 100%;
	margin: auto;
	
	@media only screen and (max-width: 767px) {
		padding: 0 15px;
	}
`

export default function Container({children, ...props}) {
	return (
		<ContainerStyled {...props}>
			{children}
		</ContainerStyled>
	)
}
