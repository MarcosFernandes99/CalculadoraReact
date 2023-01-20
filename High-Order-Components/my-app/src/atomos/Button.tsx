import { ICitation } from "../moleculas/Citation"
import styled from "styled-components";

interface IButton {
    HandleVote: (quote?: ICitation, grade?: number) => void;
    quote?: ICitation;
    children: string;
}

const Btn = styled.button`
    margin-top: 10vh;
  text-align: center;
  margin-left: 2vw;
  width: 3vw;
  height: 6vh;
  border-radius: 20px;
  cursor: pointer;
  background-color: blue;
  color: white
`;

const Button: React.FC<IButton> = (props) => {

    return (
    
        <Btn className="button" onClick={() => {
            props.HandleVote(props.quote,
                parseInt(props.children))
        }}>{props.children}</Btn>

    )

}

export default Button