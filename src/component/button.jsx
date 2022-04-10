import styled from "styled-components";

const ButtonStyled = styled.button`
	background: green;
	padding: 20px 50px;
	border: none;
	outline: none;
	color: #FFFFFF;
  cursor: ${(props) => props.buttonLink ? 'pointer' : 'none'};
	
	&.primary {
    background-color: rgb(44, 126, 219);
	}
	
	&.secondary {
    background-color: rgb(41, 179, 99);
	}
	
	@media only screen and (max-width: 767px) {
    padding: 20px;
	}
`

export default function Button({children, buttonLink, ...props}) {
	return (
		<ButtonStyled buttonLink {...props}>
			{children}
		</ButtonStyled>
	)
}
