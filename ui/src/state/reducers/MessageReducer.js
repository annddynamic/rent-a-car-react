export default function (state = [], action) {
    switch (action.type) {
        case 'TEXT_MESSAGE':
        return [...state, action.payload];
        case 'SEND_MESSAGE':
           
        default:
    }
    return state;
}

const andi = (data, state)=>{
    console.log(data)

    // state
}