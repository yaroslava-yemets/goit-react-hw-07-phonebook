import { configureStore, createReducer, getDefaultMiddleware } from '@reduxjs/toolkit';
import {  
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER 
} from 'redux-persist';
import logger from 'redux-logger'
import contactsReducer from './contactForm/contacts-reducer';

const middleware = [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), 
    logger,
];

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//     },
// })

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;

