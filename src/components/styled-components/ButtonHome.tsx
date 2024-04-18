import styled from "styled-components";

export const ButtonHome = styled.button`
	background-color: #000000;
	color: #fff;
	font-family: Trebuchet MS;
	font-size: 18px;
	font-weight: 800;
	font-style: normal;
	text-decoration: none;
	padding: 14px 15px;
	border: 0px solid #000;
	border-radius: 10px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	width: 400px;
	margin-bottom: 48px;
	margin-top: 48px;

	&:hover {
		background-color: #3a3a3a;
	}

	&:active {
		transform: scale(0.95);
	}
`;