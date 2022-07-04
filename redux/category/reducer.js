import {
    CATEGORY_GET_START,
    CATEGORY_GET_SUCCESS,
    CATEGORY_GET_ERROR,
} from '../types/constants'

const initialValue = {
    loading: false,
    isError: false,
    categoryData: []
}

const categoryReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CATEGORY_GET_START:
            return {
                ...state,
                loading: true,
                isError: false,
                categoryData: []
            }
        case CATEGORY_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                categoryData: action.payload
            }
        case CATEGORY_GET_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                categoryData: []
            }
        default:
            return state
    }
}

export default categoryReducer