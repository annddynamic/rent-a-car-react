export default function (state = [], action) {
    switch (action.type) {
        case 'TEXT_MESSAGE':
        return [...state, action.payload];
        case 'SETCHAT':
            return state = action.payload;
        default:
    }
    return state;
}