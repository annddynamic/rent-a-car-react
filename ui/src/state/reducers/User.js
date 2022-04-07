const UserReducer = (state ={}, action)=>{
    switch(action.type){
        case 'SETUSER':
            return state = action.payload
        case 'UNSETUSER':
            return state={}
        default:
            return state
    }
}

export default UserReducer