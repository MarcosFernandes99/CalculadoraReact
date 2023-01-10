function Historico (props) {
    return (
        <>

        <ul>
            {props.value.map((item, index) =>
                <li key={index} >{item} </li>)}
        </ul>
    
        </>

    )
}


export default Historico