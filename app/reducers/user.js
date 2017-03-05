import { USER_ADD } from '../actions/user'
export default function user(state = [], action) {
    switch (action.type) {
        case USER_ADD:
            return [...state,action.data]
        default:
            return state;
    }
}