import { Fragment } from "react/jsx-runtime";
import { ContainerFlex } from "../components/styled-components/ContainerFlex";
import { Title } from "../components/styled-components/Title";
import { ButtonHome } from "../components/styled-components/ButtonHome";
import { useNavigate } from "react-router-dom";

export function Home(){
    //armazena o hook e depois passa o router no botão
    const navigate = useNavigate();

    return (
        <Fragment>
            <ContainerFlex>
                <Title>
                🍔 GrowFood 🍔 
                </Title>
                <ButtonHome onClick={() => {
                    navigate('/foods')
                }}>Visualizar Cardápio</ButtonHome>
            </ContainerFlex>
        </Fragment>
    )
}