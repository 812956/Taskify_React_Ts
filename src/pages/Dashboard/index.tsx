import { useState, useEffect } from "react";
import {toast} from "react-toastify"

import { Logo } from "../../components/Logo";
import { AddTodo } from "../../components/AddTodo";
import { Todo } from "../../components/Todo";
import { ModalEdit } from "../../components/ModalEdit";

import illustrationAstronaut from "../../images/astronaut.svg";
import { Header, Container, Heading, Todos, NoTodos } from "./style";

interface ITodo {
    content: string;
    isCompleted: boolean;
    key: string;
}

export default function Dashboard() {

    const [todos, setTodos] = useState<ITodo[]>([])

    const [isModalEditActive, setIsModalEditActive] = useState<boolean>(false)
    const [whichTaskShouldUpdate, setwhichTaskShouldUpdate] = useState<string>("")

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("@todo.l")!);

        if (data!){
            setTodos(data);
        } 

    }, [])

    useEffect(() => {
        localStorage.setItem('@todo.l', JSON.stringify(todos))
    }, [todos])

    function addTodoOnState(todo: ITodo) {
        setTodos([...todos, todo])
    }

    function editTodo(keyTodo: string, newValue: string) {
        const filteredTodo = todos.map(todo => (
            todo.key === keyTodo ? { ...todo, content: newValue } : todo
        ))

        setTodos(filteredTodo);
    }

    function deleteTodo(keyTodo: string) {
        const filteredTodo = todos.filter(todo => todo.key!== keyTodo)
      
        setTodos(filteredTodo)
        toast.success('Task deleted successfully')

    }

    function markTodoAsCompleted(keyTodo:string){

        const filteredTodo = todos.map(todo=> (
            todo.key===keyTodo ? {...todo,isCompleted:true}:todo
        ))

        setTodos(filteredTodo)
        toast.success('Your task successfully completed')
    }


    function openModalEdit(keyTodo: string) {
        setIsModalEditActive(true)
        setwhichTaskShouldUpdate(keyTodo)
    }

    return (
        <>
            <Header />
            <Container>
                <Heading>
                    <Logo />
                </Heading>
                <AddTodo addTodoOnState={addTodoOnState} />

                {todos.length <= 0 && (
                    <NoTodos>
                        <img src={illustrationAstronaut} alt="astronaut illustration" />
                        <p>
                            No tasks here...
                            <br />
                            start by adding your first task.
                        </p>
                    </NoTodos>
                )}

                <Todos>
                    {todos.map((todo, indexTodo) => (
                        <Todo
                            todo={todo}
                            indexTodo={indexTodo}
                            openModalEdit={openModalEdit}
                            deleteTodo={deleteTodo}
                            markTodoAsCompleted={markTodoAsCompleted}
                        />
                    ))}
                </Todos>

                {isModalEditActive && (
                    <ModalEdit
                        editTodo={editTodo}
                        keyTodo={whichTaskShouldUpdate}
                        closeModalEdit={setIsModalEditActive}
                        todos={todos}
                    />

                )}

            </Container>
        </>
    )

}