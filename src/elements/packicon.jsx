const Pack = ({props}) => {
    console.log(props)
    //no action yet
    return (
        <div className="pack-icon">  
            <h3>{props.name}</h3>
            <h2>Price: {props.price}</h2>
        </div>
    )
}
export default Pack