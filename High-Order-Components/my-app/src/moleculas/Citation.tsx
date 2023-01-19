import Span from "../atomos/Span";

export interface ICitation {
    quote: string;
    character: string;
    anime: string;
    nota?: number;
}

const Citation: React.FC<ICitation> = (props) => {
    return (
        <>
            <div className="quoteCard">
                <div className="quote">
                    <Span>{props.quote}</Span>
                </div>
                <div>
                    {props.nota !== undefined ?
                        <>
                            <Span>{'Nota: ' + props.nota?.toString() || ''}</Span>

                        </>
                        : null

                    }
                    <Span><p className="anime">{props.anime}</p></Span>
                    <Span><p className="character">{props.character + ', '}</p></Span>                   
                </div>
            </div>
        </>
    )
}

export default Citation