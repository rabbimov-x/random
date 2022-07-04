import {
    BRAND_GET_START,
    BRAND_GET_ERROR,
    BRAND_GET_SUCCESS,
} from '../types/constants'

const initialValue = {
    loading: false,
    isError: false,
    brandData: []
}

const brandReducer = (state = initialValue, action) => {
    switch (action.type) {
        case BRAND_GET_START:
            return {
                ...state,
                loading: true,
                isError: false,
                brandData: []
            }
        case BRAND_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                brandData: action.payload
            }
        case BRAND_GET_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                brandData: []
            }
        default:
            return state
    }
}

export default brandReducer