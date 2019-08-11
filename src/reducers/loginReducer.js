
export default function (state = {login:'mik'}, action) {
    switch (action.type) {
        case 'SUCCESS':
            return { login: action.login }
        default:
            return state
    }
}