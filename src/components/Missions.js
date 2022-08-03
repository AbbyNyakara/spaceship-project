
import Mission from "./Mission";
import { useSelector } from "react-redux";

const Missions = () => {
    const missions = useSelector((state) => state.missions);
    return (
        <section>
            <h3>Mission</h3>
            <h3>Descritption</h3>
            <h3>Status</h3>
            {missions ? missions.map((mission) => <Mission 
            key={mission.mission_id}
            mission_id={mission.mission_id}
            mission_name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
            />
            ) : ''}
        </section>
)
}

export default Missions;