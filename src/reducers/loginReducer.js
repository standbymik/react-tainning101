
export default function (state = {}, action) {
    switch (action.type) {
        case 'SUCCESS':
            return { login: action.login }
        default:
            return state
    }
}