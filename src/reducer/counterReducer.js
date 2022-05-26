import * as actionTypes from '../actions/actionTypes'

const counterReducer=(state=1000,action)=>{

    let newState=0
    switch(action.type){

        case actionTypes.ADD_COUNTER:
                return newState + action.payload

        case actionTypes.REDUCE_COUNTER:
                return newState - action.payload   
                
        default:
            return state        

    }
}

export default counterReducer