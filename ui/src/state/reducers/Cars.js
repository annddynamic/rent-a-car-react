const CarsReducer = (state =[], action)=>{
    switch(action.type){
        case 'SETCARS':
            return state=action.payload
        case 'UNSETCARS':
            return state=[]
        default:
            return state=[]
    }
}

export default CarsReducer