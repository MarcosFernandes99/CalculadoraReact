import GroupCitation, {ICitation} from "./Citation"

interface ICitationRank {
    citationList: ICitation[]
}


const CitationRank: React.FC<ICitationRank> = (props) => {

    return(
        <>
            <div>
            {props.citationList.sort((a, b) => b.nota && a.nota ? b.nota - a.nota : 0).map((item, index) => (
                <GroupCitation key={index} citation={item.citation} character={item.character} anime={item.anime} nota={item.nota}></GroupCitation>
            ))}

            </div>
        
        </>

    )

}

export default CitationRank