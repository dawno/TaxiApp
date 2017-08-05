import constants from "./actionsConstants";
// const {}= constants;
const ACTION_HANDLERS = {

}
const initialState = {};
export function HomeReducer(state = initialState,action){
    const handler =  ACTION_HANDLERS[action.type];
    return handler ? handler(state,action):state;
}