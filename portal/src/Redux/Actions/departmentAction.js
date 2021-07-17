import axios from "axios";

import {
    DEPARTMENT_LIST_REQUEST,
    DEPARTMENT_LIST_SUCCESS,
    DEPARTMENT_LIST_FAIL,
} from '../Constants/departmentConstants'

export const listDepartments = () => async (dispatch) => {
    try {
        dispatch({ type: DEPARTMENT_LIST_REQUEST })
        const { data } = await axios.get('/api/department/all');
        dispatch({ type: DEPARTMENT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DEPARTMENT_LIST_FAIL, payload: error.message });
    }
}

