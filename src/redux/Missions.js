const URL = 'https://api.spacexdata.com/v3/missions';
const fetch = 'MISSIONS_FETCHED';

export const missionsDisplayed = ({ mission_id, mission_name, description }) => ({
    type: fetch,
    mission_id,
    mission_name, 
    description
})

export const missionReducer = (state = [], action) => {
    switch(action.type) {
        case fetch:
            return action.missions;
        default: 
            return state;
    }
}

export const fetchMissions = () => async (dispatch) => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        const MissionList = data
        dispatch(missionsDisplayed(MissionList))
    })
}

