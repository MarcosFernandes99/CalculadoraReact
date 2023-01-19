import axios from "axios"
import { useEffect, useState } from "react"
import Citation, {ICitation} from "../moleculas/Citation"
import VoteButtons from "../moleculas/VoteButtons"
import CitationRank from "../moleculas/CitationRank"


const VoteCitation: React.FC = () => {
    const [quote, setQuote] = useState<ICitation>({ quote: "", character: "", anime: "" })
    const [quoteList, setQuoteList] = useState<ICitation[]>([])


    useEffect(() => {
        getCitation()
    }, [])


    const handleCLick = (item?: ICitation, grade?: number,) => {
        if (item && grade) {
            let newQuote = { quote: item.quote, character: item.character, anime: item.anime, nota: 0 }
            newQuote.nota = grade
            let array = [...quoteList]
            array.push(newQuote)
            setQuoteList(array)
            getCitation()
        }
    }

    async function fetchCitation(){
        const { data } = await axios.get('https://animechan.vercel.app/api/random')
        return data
    }


    async function getCitation() {
        const data: ICitation = await fetchCitation()
        const item = {quote: data.quote, character: data.character, anime: data.anime}
        setQuote(item)
    }

    return (
        <>
            <section className="welcome">
                <h1 className="title">Qual sua nota para esta citação?</h1>
                <Citation quote={quote.quote} character={quote.character} anime={quote.anime}/>
                <br></br>
                <VoteButtons quote={quote} OnClick={handleCLick}></VoteButtons>
            </section>

            <section className="welcome">
                <h2 className="best">Melhoroes Citações</h2>
                <CitationRank quoteList={quoteList}></CitationRank>

            </section>
            <p></p>

        </>

    )

}

export default VoteCitation