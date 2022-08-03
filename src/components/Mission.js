import { joinMission } from "../redux/Missions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Mission = (props) => {
    const { mission_name, description, mission_id } = props;
    const dispatch = useDispatch();
    const [Reserved, setReserved] = useState(props);
    
    const handleJoinMission = (e) => {
        if (e.target.textContent === 'Join Mission') {
            setReserved({
                ...Reserved,
                reserved: true,
            })    
        } else {
        setReserved({
            ...Reserved,
            reserved: false,
        })
    }
        dispatch(joinMission(mission_id))
    }

    return (
        <div>
            <h3>{mission_name}</h3>
            <p>{description}</p>
            <p></p>
            <button onClick={handleJoinMission}>{
                Reserved.reserved ? 'Leave Mission' : 'Join Mission'}</button>
        </div>
    )
}

export default Mission;