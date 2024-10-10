
import checkIcon from "../../images/check.svg";
import editIcon from "../../images/edit.svg";
import trashIcon from "../../images/trash.svg";

import { StatusTodo } from "../StatusTodo"
import { Container, Buttons } from "./style"

interface ITodo {
    content:string;
    isCompleted:boolean;
    key:string;
}

interface ITodoPrpps {
    todo:ITodo;
    indexTodo:number;
    openModalEdit:(todoKey:string)=> void;
    deleteTodo:(todokey:string)=> void;
    markTodoAsCompleted:(todoKey:string)=> void;
}

export function Todo({todo, indexTodo,openModalEdit,deleteTodo,markTodoAsCompleted}:ITodoPrpps) {
    return (
        <Container
            isCompleated={todo.isCompleted}
        >

            <strong>{todo.content}</strong>
            <div className="actions">
                <StatusTodo isCompleted={todo.isCompleted} />
                <Buttons>

                    {todo.isCompleted ? (
                        
                        <button
                        onClick={()=> deleteTodo(todo.key)}
                        title="delete task"
                        >
                        <img src={trashIcon} alt="delete icon" />
                        </button>

                    ):(
                        <>
                        <button
                            onClick={()=> openModalEdit(todo.key)}
                            title="edite task"
                        >
                        <img src={editIcon} alt="edit icon" />
                        </button>

                        <button
                            onClick={()=> deleteTodo(todo.key)}
                            title="delete task"
                        >
                        <img src={trashIcon} alt="delete icon" />
                        </button>

                        <button
                            onClick={()=> markTodoAsCompleted(todo.key)}
                            title="checkIcon task"
                        >
                        <img src={checkIcon} alt="check icon" />
                        </button>
                    </>
                    )}

                    

                </Buttons>
            </div>
        </Container>
    )
}