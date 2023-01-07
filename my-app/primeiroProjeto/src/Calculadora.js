import { useState, useEffect } from "react"

const Calculadora = (props) => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const [operation, setOperation] = useState("Somar")
    
    
    useEffect(()=> {
        setResult(calcular())
    }, [num1, num2, operation])


const calcular = () => {
    if(operation === "Somar"){
        return parseFloat(num1) + parseFloat(num2)
    }
    else if(operation === "Subtrair"){
        return parseFloat(num1) - parseFloat(num2)
    }
    else if(operation === "Multiplicar"){
        return parseFloat(num1) * parseFloat(num2)
    }
    else{
        return parseFloat(num1)/parseFloat(num2)
    }

}

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <div>
                <input type="number" placeholder="Numero um" value={num1} onChange={(e) => setNum1(e.target.value)} />
            </div>
            <div>
                <input type="number" placeholder="Numero dois" value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>
            

            <button onClick={(e) => setOperation(e.target.textContent)}>Somar</button>
            <button onClick={(e) => setOperation(e.target.textContent)}>Subtrair</button>
            <button onClick={(e) => setOperation(e.target.textContent)}>Multiplicar</button>
            <button onClick={(e) => setOperation(e.target.textContent)}>Dividir</button>

            <p>Resultado = {result} {props.value}</p>
            
        </div>
    )
}

export default Calculadora
