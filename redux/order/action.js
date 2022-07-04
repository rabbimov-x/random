import axios from "axios"
import {
    ORDER_POST_START,
    ORDER_POST_SUCCESS,
    ORDER_POST_ERROR,
    ORDER_GET_START,
    ORDER_GET_SUCCESS,
    ORDER_GET_ERROR, UPDATE_STATE
} from '../types/constants'
import {BaseUrl, order} from '../../api/api'
import {Clear, Success, Errorr} from "../status/action";
import {toast} from "react-hot-toast";

export const postOrder = (data) => async dispatch => {
    dispatch({type: ORDER_POST_START})
    try {
        const res = await axios.post(BaseUrl + order, data);
        if (res.status === 201) {
            dispatch({type: ORDER_POST_SUCCESS, payload: res.data})
            dispatch({type: UPDATE_STATE, data: {onModal: false}})
            toast.success('Ваш заказ принят')
        }
    } catch (e) {
        dispatch({type: ORDER_POST_ERROR, payload: e.message})
        toast.error('Ошибка')
    }
}

export const getOrder = () => async dispatch => {
    dispatch({type: ORDER_GET_START})
    try {
        const res = await axios.get(BaseUrl + order);
        if (res.status === 200) {
            dispatch({type: ORDER_GET_SUCCESS, payload: res.data})
            dispatch(Success)
            dispatch(Clear)
        }
    } catch (e) {
        dispatch({type: ORDER_GET_ERROR, payload: e.message})
        dispatch(Errorr)
        dispatch(Clear)
    }
}