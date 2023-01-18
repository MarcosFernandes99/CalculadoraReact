import { useEffect, useState } from "react"
import Citation, {ICitation} from "../moleculas/Citation"
import VoteButtons from "../moleculas/VoteButtons"
import CitationRank from "../moleculas/CitationRank"


const VoteCitation: React.FC = () => {
    const [citation, setCitation] = useState({ citation: "", character: "", anime: "" })
    const [citationList, setCitationLIst] = useState([])


    useEffect(() => {
        getCitation()
    }, [])


    const handleCLick = (item?: ICitation, grade?: number,) => {
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
                <Citation citation={citation.citation} character={citation.character} anime={citation.anime}/>
                <br></br>
                <VoteButtons citation={citation} onClick={handleCLick}></VoteButtons>
            </section>

            <section className="welcome">
                <h2>Melhoroes Citações</h2>
                <CitationRank citationList={citationList}></CitationRank>

            </section>
            <p></p>

        </>

    )

}

export VoteCitation