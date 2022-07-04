import {
    ORDER_POST_START,
    ORDER_POST_ERROR,
    ORDER_POST_SUCCESS,
    ORDER_GET_START,
    ORDER_GET_SUCCESS,
    ORDER_GET_ERROR
} from '../types/constants'

const initialValue = {
    loading: false,
    isError: false,
    orderStatus: '',
    orderData: [],
    success: false,
}

const orderReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ORDER_POST_START:
            return {
                ...state,
                loading: true,
                isError: false,
                orderStatus: '',
                success: false
            }
        case ORDER_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                success: true,
                orderStatus: action.payload
            }
        case ORDER_POST_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                success: false,
                orderStatus: ''
            }
        case ORDER_GET_START:
            return {
                ...state,
                loading: true,
                isError: false,
                orderStatus: '',
            }
        case ORDER_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                orderStatus: '',
                orderData: action.payload
            }
        case ORDER_GET_ERROR:
            return {
                ...state,
                loading: false,
                isError: false,
                orderStatus: '',
                orderData: []
            }
        default:
            return state
    }
}

export default orderReducer