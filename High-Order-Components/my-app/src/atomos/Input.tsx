const stylesDiv = {
    textAlign: 'center',
}

const inputStyle = {
    backgroundColor: 'gray',
}

const buttonStyle = {
    backgroundColor: 'green',
    width: '3vw',
    height: '4vh',
    marginLeft: '2vh',
    borderRadius: '1vh',
    color: 'white',
}


const Input: React.FC = () => {

    return (
        <>
            <div style={stylesDiv}>
                <label>Nome:</label>
                <input style={inputStyle} ></input>
                <label>Idade:</label>
                <input style={inputStyle}></input>
                <button style={buttonStyle} >Enviar</button>
            </div>
        </>
    )
}

export default Input