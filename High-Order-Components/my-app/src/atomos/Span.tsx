interface ISpan {
    children: string | React.ReactElement | React.ReactElement[]
    style?: {}
}

const Span: React.FC<ISpan> = (props) => {
    return (
        <>
        <span>{props.children}</span>
        </>

    )
}

export default Span;