import { Cars } from "../../utils/cars";
import {  UPDATE_STATE} from "../types/constants"
import {sevices} from "../../utils/services";
import { booking, carAll, footer, modelTitle, navbar, servicesall, worldOfCars } from "../../utils/homeLanguage";



const initionalState = {

    data: [{id: 0, title: "summa", body: " malekam"}],
    randomData: [{choose: ""}],
    animName: "",
    delete: "true",
    onModal: false,
    idCar: null,
    modelsPlay: Cars,
    brandId: null,
    modelName: null,
    categoryId: null,
    sevice: sevices,
    detail: false,
    adminModall: true,
    editorAddCar: true,
    languages: {
        navbar: navbar,
        modelTitle: modelTitle,
        booking: booking,
        worldOfCars: worldOfCars,
        footer: footer,
        carAll: carAll,
    },
    controLanguages: "en"

}



export const updateState = (state = initionalState, action)=>{
    switch(action.type){
    case UPDATE_STATE:   return {...state , ...action.data};  
    default : return state;
    } 
} 

