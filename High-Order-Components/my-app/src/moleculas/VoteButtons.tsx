import Button from "../atomos/Button"
import { ICitation } from "./Citation" 
// pq entre chaves


interface IVoteButtons {
    OnClick: (citation?: ICitation, grade?: number) => void;
    citation?: ICitation


}

const VoteButtons: React.FC<IVoteButtons> = (props) => {

    return (
        <>
            <div className="buttons">
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteOne">1</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteTwo">2</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteThree">3</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteFour">4</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteFive">5</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteSix">6</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteSeven">7</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteEight">8</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteNine">9</Button>
                <Button citation={props.citation} HandleVote={props.OnClick} className="button noteTen">10</Button>
            </div>

        </>
    )
}

export default VoteButtons