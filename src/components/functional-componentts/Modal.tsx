import { Fragment } from "react/jsx-runtime";
import { Modal as ModalStyled } from "../styled-components/Modal/Modal";
import { ModalDialog } from "../styled-components/Modal/ModalDialog";
import { ModalContent } from "../styled-components/Modal/ModalContent";
import { ModalHeader } from "../styled-components/Modal/ModalHeader";
import { ModalTitle } from "../styled-components/Modal/ModalTitle";
import { ButtonClose } from "../styled-components/Modal/ButtonClose";
import { ModalBody } from "../styled-components/Modal/ModalBody";
import { ModalFooter } from "../styled-components/Modal/ModalFooter";
import { ModalButton } from "../styled-components/Modal/ModalButton";

interface ModalProps{
    title: string;
    //corpo
    children?: React.ReactNode;
    textButtonConfirm:string;
    //abrir modal
    isOpen: boolean;
    //ativar botão fechar
    actionClose: ()=>void;
    //ativar botão confirmar
    actionConfirm: ()=>void;
}

export function Modal(props: ModalProps){
    return(
        <Fragment>
            {props.isOpen && (
                <ModalStyled>
                    <ModalDialog>
                        <ModalContent>
                            <ModalHeader>
                                <ModalTitle>{props.title}</ModalTitle>
                                <ButtonClose type="button" onClick={props.actionClose}></ButtonClose>
                            </ModalHeader>
                            <ModalBody>{props.children ?? <Fragment/>}</ModalBody>
                            <ModalFooter>
                                <ModalButton type="button" onClick={props.actionClose}>Cancelar</ModalButton>

                                <ModalButton type="button" onClick={props.actionConfirm}>{props.textButtonConfirm}</ModalButton>
                            </ModalFooter>
                        </ModalContent>
                    </ModalDialog>

                </ModalStyled>
            )}
        </Fragment>
    )
}