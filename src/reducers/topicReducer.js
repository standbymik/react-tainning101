export default function (state = [], action) {
    const topic = action.topic
    switch (action.type) {
        case 'ADD':
            return [...state, ...topic]
        default:
            return state
    }
}