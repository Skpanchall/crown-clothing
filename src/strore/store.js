import {compose , createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; 
import { rootReducer } from './root-reducer';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggermiddleware } from './middleware/logger';
import thunk from 'redux-thunk';

const middleware  = [process.env.NODE_ENV === 'development' && logger,thunk].filter(Boolean);

const persistconfig = {
    key:'root',
    storage,
    blacklist: ['user']
};

const persistreducer = persistReducer(persistconfig,rootReducer);


const composeEnhancer =  (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 
const composeenhancer = composeEnhancer(applyMiddleware(...middleware));
export const store = createStore(persistreducer, undefined , composeenhancer);

export const persistor = persistStore(store);