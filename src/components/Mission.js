const Mission = (props) => {
    const { mission_name, description } = props;
    return (
        <div>
            <h3>{mission_name}</h3>
            <p>{description}</p>
            <p></p>
            <button></button>
        </div>
    )
}

export default Mission;