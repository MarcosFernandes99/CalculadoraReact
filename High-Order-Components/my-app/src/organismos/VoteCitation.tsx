import { useEffect, useState } from "react"

const VoteCitation: React.FC = () => {

    const [citation, setCitation] = useState({ citation: "", character: "", anime: "" })
    const [citationList, setCitationLIst] = useState([])


    useEffect(() => {
        getCitation()
    }, [])


    const handleCLick = (item?:, grade?:,) => {
        if (item && grade) {
            let newCitation = { citation: item.citation, character: item.character, anime: item.anime, nota: 0 }
            newCitation.nota = grade
            let array = [...citationList]
            array.push(newCitation)
            setCitationLIst()
            getCitation()
        }
    }


    return (
        <>
            <section className="welcome">
                <h1>Boas-vindas Amigo(a)</h1>
                <br></br>


            </section>

            <section className="welcome">
                <h2>Melhoroes Citações</h2>


            </section>
            <p></p>

        </>

    )

}