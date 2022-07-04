import {
    CAR_START,
    CAR_SUCCESS,
    CAR_ERROR,
    SUCCESS_STATUS,
    ERROR_STATUS,
    CAR_GET_ID_ERROR,
    CAR_GET_ID_SUCCESS,
    CAR_GET_ID_START
} from '../types/constants'

const initialValue = {
    loading: false,
    isError: false,
    carData: [],
    carIdData: []
}

const carReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CAR_START:
            return {
                ...state,
                loading: true,
                isError: false,
                carData: []
            }
        case CAR_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                carData: action.payload
            }
        case CAR_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                carData: []
            }
        case CAR_GET_ID_START:
            return {
                ...state,
                loading: true,
                isError: false,
                carIdData: []
            }
        case CAR_GET_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                carIdData: action.payload
            }
        case CAR_GET_ID_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                carIdData: []
            }
        default:
            return state
    }
}

export default carReducer