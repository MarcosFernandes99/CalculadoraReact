import withToggle from "../moleculas/hocs"

const Input = (props) => {

    if(props.status){
        return <input onClick={props.onToggle} value={props.children} />
    }

        return <span onClick={props.onToggle}>{props.children}</span>
}

export default withToggle(Input)