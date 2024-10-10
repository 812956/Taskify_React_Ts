import React,{ useState,FormEvent } from 'react'
import { Button } from '../Button'

import {ModalOverlay,ModalContent} from './style'

import {toast} from 'react-toastify'
import  closeIcon from '../../images/close.svg'

interface ITodo {
    content: string;
    isCompleted: boolean;
    key: string;
}

interface IModalEditProps {
    editTodo:(key:string,newValue:string)=> void;
    keyTodo:string;
    closeModalEdit:React.Dispatch<React.SetStateAction<boolean>>;
    todos:ITodo[]
}

export function ModalEdit({editTodo,keyTodo,closeModalEdit,todos}:IModalEditProps) {

    const [updateTodo,setUpdateTodo] = useState<string>("")

    function handleForm(event:FormEvent) {
        event.preventDefault()

        if(updateTodo.trim() === "") {
            toast.error('please enter in to input')
            return;
        }

        editTodo(keyTodo,updateTodo)
        setUpdateTodo('')

        toast.success('Your Task edited successfully..')
        closeModalEdit(false);

    }

    const editVal = todos.filter((x,intex)=> x.key===keyTodo)[0].content
    

    return (
        <ModalOverlay>
           <ModalContent>
               <h2>Edit Task</h2>
               <p>Edit your taske as you wish</p>
               <img 
               src={closeIcon} 
               alt="close icon" 
               onClick={()=> closeModalEdit(false)}
               />

               <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="newTodo" className='sr-only'>
                       Type your new taske
                    </label>
                    <input 
                    type="text" 
                    id='newTodo'
                    value={updateTodo}
                    onChange={(event)=> setUpdateTodo(event.target.value)}
                    placeholder={editVal}
                    autoComplete="off"
                    />
                </div>
                <Button>Submit, Edit</Button>
               </form>
           </ModalContent>
        </ModalOverlay>
    )
}