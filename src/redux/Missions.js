const URL = 'https://api.spacexdata.com/v3/missions';
const getMissions = 'MISSIONS_FETCHED';

export const missionsDisplayed = (missions) => ({
    type: getMissions,
    missions,
})

export const missionReducer = (state = [], action) => {
    switch(action.type) {
        case getMissions:
            return action.missions;
        default: 
            return state;
    }
}

export const fetchMissions = () => async (dispatch) => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        dispatch(missionsDisplayed(data))
    })
}

