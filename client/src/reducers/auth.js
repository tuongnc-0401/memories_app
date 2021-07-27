import { AUTH, LOGOUT } from "../constants/actionTypes";

export default (state = { authDatas: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authDatas: action?.data };
        case LOGOUT:
            localStorage.clear()
            return { ...state, authDatas: null };
        default:
            return state;
    }
}