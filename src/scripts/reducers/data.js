

const defaultState = {
    count: 2000,
    food: []
}

export default (state = defaultState, action) => {
    // console.log(action);
    switch (action.type) {

        case "getfoodlist":
            return { ...state, food: action.food };
            break;

        default:
            return state;
            break;
    }
}