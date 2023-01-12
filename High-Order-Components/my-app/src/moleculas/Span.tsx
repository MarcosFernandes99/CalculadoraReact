import withToggle from "./withToggle";

const Span: React.FC<{
    children: number | string
    status: boolean
    onToggle: () => void
}> = (props) => {

    if (!props.status) {

        return <input onFocus={props.onToggle} value={props.children} />

    }

    return (
        <>
            <input onFocus={props.onToggle} value={props.children} />
            <p>
                **FUNÇÃO DE HOVER FUNCIONANDO**
            </p>

        </>

    )
}

export default withToggle(Span)