import Button from "../atomos/Button"
import { ICitation } from "./Citation" 
// pq entre chaves


interface IVoteButtons {
    OnClick: (quote?: ICitation, grade?: number) => void;
    quote?: ICitation


}

const VoteButtons: React.FC<IVoteButtons> = (props) => {

    return (
        <>
            <div className="buttons">
                <Button quote={props.quote} HandleVote={props.OnClick}>1</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>2</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>3</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>4</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>5</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>6</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>7</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>8</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>9</Button>
                <Button quote={props.quote} HandleVote={props.OnClick}>10</Button>
            </div>

        </>
    )
}

export default VoteButtons