import {useState} from "react"

const withToggle = (Component) => {

    const WithToggle = (props) => {
        const [status, setStatus] = useState(false)
        const handleToggle = {} => setStatus(!status)
        return <Component {...props} status={status} onToggle={handleToggle} />
    }
    
    return WithToggle

}

export default mudarBotao