import { Container } from "./style";

interface IStatusTodoProps {
    isCompleted: boolean;
}

export function StatusTodo({isCompleted}:IStatusTodoProps) {
   
    return (
        <Container isCompleted={isCompleted}>
          {isCompleted ? "Completed" : "Pending.."}
        </Container>
    )
}