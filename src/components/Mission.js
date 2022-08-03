import { joinMission } from "../redux/Missions";
import { useDispatch } from "react-redux";

const Mission = (props) => {
  const { mission_name, description, mission_id, reserved } = props;
  const dispatch = useDispatch();
  const handleJoinMission = () => {
    dispatch(joinMission(mission_id));
  };

  return (
    <div>
      <h3>{mission_name}</h3>
      <p>{description}</p>
      <p>{reserved ? "Active Member" : "NOT A MEMBER"}</p>
      <button onClick={handleJoinMission}>
        {reserved ? "Leave Mission" : "Join Mission"}
      </button>
    </div>
  );
};

export default Mission;
