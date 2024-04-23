import { useEffect, useRef, useState } from "react";
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
    //const [name, setName] = useState<string>('')
    //const [ingredients, setIngredients] = useState<string>('')
    //const [price, setPrice] = useState<number>(0)

    const inputName = useRef<HTMLInputElement>(null)
    const inputIngredients = useRef<HTMLInputElement>(null)
    const inputPrice = useRef<HTMLInputElement>(null)

    //o modal começa false (fechado)
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false)
    const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState<boolean>(false)
    const [preparationSelected, setPreparationSelected] = useState<Preparation>({
        id:'',
        name:'',
        ingredients:'',
        price: 0
    })
//salvar no local storage
    useEffect(()=> {
        const storageData = localStorage.getItem('preparations');

        if(storageData){
            setPreparations(JSON.parse(storageData))
        }
    }, [])
//ficar monitorando array de preparações
    useEffect(()=> {
        localStorage.setItem('preparations', JSON.stringify(preparations))
    },[preparations])

//criar preparação
    function create(){
        if(!inputName.current?.validity.valid){
            inputName.current?.focus();
            return
        }
        if(!inputIngredients.current?.validity.valid){
            inputName.current?.focus();
            return
        }
        if(!inputPrice.current?.validity.valid){
            inputName.current?.focus();
            return
        }
        
        const newPreparation: Preparation ={
            id: randomUUID(),
            name: inputName.current.value,
            ingredients: inputIngredients.current.value,
            price: Number(inputPrice.current.value),
        };
        
        setPreparations((current)=> [newPreparation, ...current])

        clearFields()

        closeModal('create')
    }
//limpar campos
//    function clearFields(){
//        setName('')
//        setIngredients('')
//        setPrice(0)
//    }
//abrir modal - muda de fechado para aberto
    function openModal(mode: 'create' | 'update'){
        if(mode === 'create'){
            setModalCreateIsOpen(true)
        } else{
            setModalUpdateIsOpen(true)
        }
    }
//fechar modal
    function closeModal(mode: 'create' | 'update'){
        if(mode === 'create'){
            setModalCreateIsOpen(false)
        }else{
            setModalUpdateIsOpen(false)
        }
    }
//limpar campos
    function clearFields(){
        inputName.current!.value = '';
        inputIngredients.current!.value = '';
        inputPrice.current!.value = '';
    }
//pedir para deletar
    function handleDelete(preparation: Preparation){
        const isConfirmed = confirm(`Tem certeza que gostaria de excluir a preparação ${preparation.name} do cardápio?`)

        if(isConfirmed){
            setPreparations(preparations.filter((snack) => snack.id !== preparation.id))
        }
    }
//pedir para atualizar
    function handleUpdate(preparation: Preparation){
        openModal('update');
        setPreparationSelected(preparation)
    }

    //function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>){
    //    setPreparationSelected({
    //        ...preparationSelected,
    //       [ev.currentTarget.name]: ev.currentTarget.value
    //   })
    //}
  
    function confirmUpdate(){
        const indexFound = preparations.findIndex((p)=>p.id===preparationSelected.id)
        
        //if(indexFound !== -1){
        //    const copy = [...preparations]

        //    copy[indexFound] = preparationSelected

        //    setPreparations(copy)
        //}
        //closeModal('update')

        setPreparations((currentList)=>{
            currentList[indexFound]={
                id:preparationSelected.id,
                name: inputName.current!.value,
                ingredients: inputIngredients.current!.value,
                price: Number(inputPrice.current!.value),
            }
            return currentList;
        })
        closeModal('update')
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
                                    <ActionButton onClick={()=> handleUpdate(preparation)}>Atualizar</ActionButton>
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
                    ref={inputName}
                    type="text"
                    name="name"
                    placeholder="Nome do preparo"
                    required/>

                    <Input
                    ref={inputIngredients}
                    type="text"
                    name="ingredients"
                    placeholder="Ingredientes"
                    required/>

                    <Input
                    ref={inputPrice}
                    type="number"
                    name="price"
                    placeholder="Valor do preparo"
                    required/>
                </Modal>

                <Modal 
                title="Atualizar Preparo"
                textButtonConfirm="Atualizar"
                isOpen={modalUpdateIsOpen}
                actionClose={()=> closeModal('update')}
                actionConfirm={confirmUpdate}>

                    <Input
                    ref={inputName}
                    type="text"
                    name="name"
                    placeholder="Nome do preparo"
                    defaultValue={preparationSelected.name}/>

                    <Input
                    ref={inputIngredients}
                    type="text"
                    name="ingredients"
                    placeholder="Ingredientes"
                    defaultValue={preparationSelected.ingredients}/>

                    <Input
                    ref={inputPrice}
                    type="number"
                    name="price"
                    placeholder="Valor do preparo"
                    defaultValue={preparationSelected.price}/>
                </Modal>
        </Fragment>
    )
}