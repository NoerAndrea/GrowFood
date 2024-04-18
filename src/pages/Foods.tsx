import { useState } from "react";
import { Fragment } from "react/jsx-runtime"
import { Container } from "../components/styled-components/Container";
import { Title } from "../components/styled-components/Title";
import { Table } from "../components/styled-components/Table";
import { ActionButton } from "../components/styled-components/ActionButton";
import {v4 as randomUUID} from 'uuid'
import { Modal } from "../components/functional-componentts/Modal";
import { FloatButton } from "../components/styled-components/FloatButton";
import { Input } from "../components/styled-components/Input";

export interface Preparation{
    id: string;
    name: string;
    ingredients: string;
    price: number;
}

export function Foods(){
    const [preparations, setPreparations] = useState<Preparation[]>([])
    const [name, setName] = useState<string>('')
    const [ingredients, setIngredients] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false)

    function create(){
        
        const newPreparation: Preparation ={
            id: randomUUID(),
            name: name,
            ingredients: ingredients,
            price: price,
        };
        
        setPreparations((current)=> [newPreparation, ...current])

        clearFields()

        closeModal('create')
    }

    function clearFields(){
        setName('')
        setIngredients('')
        setPrice(0)
    }

    function openModal(mode: 'create'){
        if(mode === 'create'){
            setModalCreateIsOpen(true)
        }
    }

    function closeModal(mode: 'create'){
        if(mode === 'create'){
            setModalCreateIsOpen(false)
        }
    }

    function handleDelete(preparation: Preparation){
        const isConfirmed = confirm(`Tem certeza que gostaria de excluir a preparação ${preparation.name} do cardápio?`)

        if(isConfirmed){
            setPreparations(preparations.filter((snack) => snack.id !== preparation.id))
        }
    }
  

    return (
        <Fragment>
            <Container>
                <Title>Cardápio</Title>
                
                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ingredientes</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparations.map((preparation)=> (
                            <tr key={preparation.id}>
                                <td>{preparation.name}</td>
                                <td>{preparation.ingredients}</td>
                                <td>{preparation.price}</td>
                                <td>
                                    <ActionButton onClick={()=>handleDelete(preparation)}>Excluir</ActionButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <FloatButton onClick={()=>openModal('create')}>+</FloatButton>

            <Modal 
                title="Novo Preparo"
                textButtonConfirm="Cadastrar"
                actionConfirm={create}
                isOpen={modalCreateIsOpen}
                actionClose={()=> closeModal('create')}>
                    <Input
                    type="text"
                    name="name"
                    placeholder="Nome do preparo"
                    onChange={(event) => setName(event.currentTarget.value)}/>

                    <Input
                    type="text"
                    name="ingredients"
                    placeholder="Ingredientes"
                    onChange={(event) => setIngredients(event.currentTarget.value)}/>

                    <Input
                    type="number"
                    name="price"
                    placeholder="Valor do preparo"
                    onChange={(event) => setPrice(event.currentTarget.valueAsNumber)}/>

                </Modal>
        </Fragment>
    )
}