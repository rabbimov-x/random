import axios from "axios";
import {
    BRAND_GET_START, BRAND_GET_ERROR, BRAND_GET_SUCCESS
} from '../types/constants'
import {BaseUrl, brand} from '../../api/api'

export const getBrand = () => async dispatch => {
    dispatch({type: BRAND_GET_START})
    try {
        const res = await axios.get(BaseUrl + brand);
        if (res.status === 200) {
            dispatch({type: BRAND_GET_SUCCESS, payload: res.data})
        }
    } catch (e) {
        dispatch({type: BRAND_GET_ERROR, payload: e.message})
    }
}