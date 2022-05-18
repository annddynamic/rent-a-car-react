
export default function (state = [], action) {
    switch (action.type) {
        case 'USER_JOINED':
        case 'USER_LEFT':
            const us = action.payload && action.payload.length > 0 ? action.payload : [];
            return us;
        default:
    }

    return state;
}