import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const createStoreWithMiddleware=applyMiddleware(
    thunk
)(createStore)

export default function configureStore(initState){
    const store=createStoreWithMiddleware(rootReducer,initState);
    if(module.hot){
        module.hot.accept('../reducsers',()=>{
            const nextReducer=require('../reducers');
            store.replaceReducer(nextReducer)
        })
    }
    return store;
}