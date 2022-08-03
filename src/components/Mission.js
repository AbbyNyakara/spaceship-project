import { joinMission } from "../redux/Missions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Mission = (props) => {
    const { mission_name, description, mission_id } = props;
    const dispatch = useDispatch();
    const [Reserved, setReserved] = useState(props);
    
    const handleJoinMission = (e) => {
        setReserved({
            ...Reserved,
            reserved: true,
        })
        dispatch(joinMission(mission_id))
    }

    return (
        <div>
            <h3>{mission_name}</h3>
            <p>{description}</p>
            <p></p>
            <button onClick={handleJoinMission}>{Reserved.hasOwnProperty('reserved') ? 'Leave Mission' : 'Join Mission'}</button>
        </div>
    )
}

export default Mission;