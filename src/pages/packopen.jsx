import Pokemon from "./elements/pokemonicon"
const Packpage = ({ props }) => {
    const Packcollection = () => (props.items.map((item, itemid) => <Pokemon key={itemid} pokemon={item}/>))
    return (
        <>
            <h1>{props.name}</h1>
            <div className="pack-collection">
                <h2>This pack contains:</h2>
                <Packcollection/>
            </div>
            <button className="submit">
                Open pack
            </button>
        </>
    )
}
export default Packpage