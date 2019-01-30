import { createStore } from 'redux';
import reducers from '../reducers';

export const makeStore = initialState => {
    const store = createStore(reducers, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            console.log('Replacing reducers');
            store.replaceReducer(require('../reducers').default);
        });
    }

    return store;
};