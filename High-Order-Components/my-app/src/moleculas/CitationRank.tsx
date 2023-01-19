import GroupCitation, {ICitation} from "./Citation"


interface ICitationRank {
    quoteList: ICitation[]
}


const CitationRank: React.FC<ICitationRank> = (props) => {

    return(
        <>
            <div className="bestRank">
            {props.quoteList.sort((a, b) => b.nota && a.nota ? b.nota - a.nota : 0).map((item, index) => (
                <GroupCitation key={index} quote={item.quote} character={item.character} anime={item.anime} nota={item.nota}></GroupCitation>
            ))}

            </div>
        
        </>

    )

}

export default CitationRank