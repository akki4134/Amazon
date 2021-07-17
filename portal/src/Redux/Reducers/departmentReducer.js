import {
    DEPARTMENT_LIST_REQUEST,
    DEPARTMENT_LIST_SUCCESS,
    DEPARTMENT_LIST_FAIL,
} from '../Constants/departmentConstants'

export const departmentListReducer = (state = { departments: [] }, action) => {
    switch (action.type) {
        case DEPARTMENT_LIST_REQUEST:
            return { loading: true };
        case DEPARTMENT_LIST_SUCCESS:
            return { loading: false, departments: action.payload };
        case DEPARTMENT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
