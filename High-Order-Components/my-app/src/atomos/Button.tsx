import {ICitation} from "../moleculas/Citation"

interface IButton {
    HandleClick: (firstNumber?: number, secondNumber?: number, operation?: string) => void;
    HandleVote: (citation?: ICitation, grade?: number) => void;
    firstNum?: number;
    secondNum?: number;
    citation?: ICitation;
    children: string | number;
}


const Button: React.FC<IButton> = (props) => {
    
    return (

        <button onClick={() => {props.HandleClick(props.firstNum, props.secondNum, props.children?.toString()), props.HandleVote(props.citation, 
            props.children)}}></button>

    )


}

export default Button