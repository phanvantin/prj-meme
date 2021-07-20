
import { Link } from "react-router-dom"

const showItemCategory =(data)=>{
    if(!data) {
        return data
    }
    return (
        <li key={data.id}><Link to={"/category/" + data.id}>{data.text}</Link></li>
    )
}
export default showItemCategory