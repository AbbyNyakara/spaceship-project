
import Mission from "./Mission";


const Missions = (props) => {
    const { MissionList } = props;

    return (
        <section>
            <h3>Mission</h3>
            <h3>Descritption</h3>
            <h3>Status</h3>
            {MissionList ? MissionList.map((mission) => <Mission 
            key={mission.mission_id}
            mission_id={mission.mission_id}
            mission_name={mission.mission_name}
            description={mission.description}
            />
            ) : ''}
        </section>
)
}

export default Missions;