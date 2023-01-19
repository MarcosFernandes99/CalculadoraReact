import {ICitation} from "../moleculas/Citation"

interface IButton {
    HandleVote: (quote?: ICitation, grade?: number) => void;
    quote?: ICitation;
    children: string;
}


const Button: React.FC<IButton> = (props) => {
    
    return (

        <button className="button" onClick={() => {props.HandleVote(props.quote,
            parseInt(props.children))}}>{props.children}</button>

    )

}

export default Button