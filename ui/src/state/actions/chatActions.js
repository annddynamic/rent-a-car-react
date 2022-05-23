export function userJoined(users) {
    return {
        type: 'USER_JOINED',
        payload: users
    }
}

export function userJoinedAck(thisUser) {
    return {
        type: 'USER_JOINED_ACK',
        payload: thisUser
    }
}

export function userLeft(users) {
    return {
        type: 'USER_LEFT',
        payload: users
    }
}

export function messageReceived(message) {
    return {
        type: 'TEXT_MESSAGE',
        payload: message
    }
}