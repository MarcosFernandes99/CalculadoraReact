import { useState, useEffect } from "react"
import Historico from "./Historico"

const Calculadora = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const [historico, setHistorico] = useState([])

        useEffect(() => {
            let lista = historico.slice()
            lista.push(result)
            setHistorico(lista)
        }, [result])
    
    
    
    const calcular = (parametroOperation) => {
        if (parametroOperation === "Somar") {
            return setResult(parseFloat(num1) + parseFloat(num2))
        }
        if (parametroOperation === "Subtrair") {
            return setResult(parseFloat(num1) - parseFloat(num2))
        }
        if (parametroOperation === "Multiplicar") {
            return setResult(parseFloat(num1) * parseFloat(num2))
        }
        if (parametroOperation === "Dividir"){
            return setResult(parseFloat(num1) / parseFloat(num2))
        }

    }

    return (
        <>
            <div className="calculadora">
                <h1>Calculadora</h1>
                <div>
                    <input type="number" placeholder="Numero um" value={num1} onChange={(e) => setNum1(e.target.value)} />
                </div>
                <div>
                    <input type="number" placeholder="Numero dois" value={num2} onChange={(e) => setNum2(e.target.value)} />
                </div>

                <div>
                    <button onClick={(e) => calcular(e.target.textContent)}>Somar</button>
                    <button onClick={(e) => calcular(e.target.textContent)}>Subtrair</button>
                    <button onClick={(e) => calcular(e.target.textContent)}>Multiplicar</button>
                    <button onClick={(e) => calcular(e.target.textContent)}>Dividir</button>
                </div>

                <div>
                    <p>Resultado = {result}</p>
                </div>

                <div>
                    <h3>Histórico</h3>
                    <Historico value={historico}/>
                </div>


            </div>
        </>

    )
}

export default Calculadora
