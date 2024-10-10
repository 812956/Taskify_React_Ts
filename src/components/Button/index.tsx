import { ButtonHTMLAttributes} from "react";
import { Container } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}


export function Button ({children,...rest}:IButtonProps) {
    return (
        <Container {...rest}>
        {children}
        </Container>
    )
}