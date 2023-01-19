import Span from "../atomos/Span";

export interface ICitation {
    quote: string;
    character: string;
    anime: string;
    nota?: number;
}

const quoteStyle = {
    marginTop: '3vh',
    margin: '2vh 2vh 2vh 2vh'
}

const quoteCardStyle = {
    marginTop: '3vh',
    border: '0.5vh solid black',
    borderRadius: '3vh',
    backgroundColor: 'white',
    fontSize: '3vh',
    
}

const animeAndCharacterStyle = {
    marginTop: '2vh',
    fontSize: '2vh',
    margin: '2vh 2vh 2vh 2vh'
}


const Citation: React.FC<ICitation> = (props) => {
    return (
        <>
            <div style={quoteCardStyle} className="quoteCard">
                <div style={quoteStyle} className="quote">
                    <Span>{props.quote}</Span>
                </div>
                <div style={animeAndCharacterStyle}>
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