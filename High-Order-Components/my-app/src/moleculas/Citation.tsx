

export interface ICitation {
    citation: string;
    character: string;
    anime: string;
    nota?: number;
}

const Citation: React.FC<ICitation> = (props) => {
    return (
        <>
            <div>
                <div>
                    <Span>{props.citation}</Span>
                </div>
                <div>
                    {props.nota !== undefined ?
                        <>
                            <Span>{'Nota: ' + props.nota?.toString() || ''}</Span>

                        </>
                        : null

                    }
                    <Span>{props.anime}</Span>
                    <Span>{props.character + ', '}</Span>                   
                </div>
            </div>
        </>
    )
}