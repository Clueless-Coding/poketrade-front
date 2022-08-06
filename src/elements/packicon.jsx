const Pack = ({props}) => {
    console.log(props)
    //no action yet
    return (
        <div className="">  
            {props.name}
            {props.price}
        </div>
    )
}
export default Pack