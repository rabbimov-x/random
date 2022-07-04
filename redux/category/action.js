import axios from "axios";
import {
    CATEGORY_GET_SUCCESS, CATEGORY_GET_ERROR, CATEGORY_GET_START
} from '../types/constants'
import {BaseUrl, category} from '../../api/api'

export const getCategory = () => async dispatch => {
    dispatch({type: CATEGORY_GET_START})
    try {
        const res = await axios.get(BaseUrl + category);
        if (res.status === 200) {
            dispatch({type: CATEGORY_GET_SUCCESS, payload: res.data})
        }
    } catch (e) {
        dispatch({type: CATEGORY_GET_ERROR, payload: e.message})
    }
}