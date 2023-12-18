import { Link } from "react-router-dom"
const Pack = ({props}) => {
    //no action yet
    return (
        <Link to={`/${props.name}`}>
            <div className="pack-icon">  
                <img alt="" src={props.img}/>
                <h3>{props.name}</h3>
                <h2>Price: {props.price}</h2>
            </div>
        </Link>
    )
}
export default Pack