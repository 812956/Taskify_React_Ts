import { useState,FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "./style"
import { Button } from "../Button"

interface ITodo {
    content:string;
    isCompleted:boolean;
    key:string;
}

interface IAddTodoProps {
    addTodoOnState:(todo:ITodo) => void
}

export function AddTodo({addTodoOnState}:IAddTodoProps) {

    const [inputValue,setInputValue] = useState<string>('')

    function handleForm(event:FormEvent) {
        event.preventDefault()

       if(inputValue.trim() === '') {
        toast.error('Please fill in the field')
        return
       } 
       
       addTodoOnState({
        content:inputValue,
        isCompleted:false,
        key:uuidv4()
       })

       toast.success('Task added successfully')
       setInputValue('')
    }
    
    return (
    <Container>
        <form onSubmit={handleForm} >
            <div>
                <label htmlFor="task" className="sr-only">
                    Enter your task
                </label>
                <input
                type="text"
                id="task"
                placeholder="Enter your task"
                autoFocus
                onChange={event => setInputValue(event.target.value)}
                value={inputValue}
                />
                <Button>Add your Task</Button>
            </div>
            <ToastContainer/>
        </form>
    </Container>
    )
}