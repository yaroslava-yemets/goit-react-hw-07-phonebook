import { configureStore, createReducer, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
    persistStore, 
    persistReducer, 
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import formReducer from './contactForm/form-reducer';
import { createRef } from 'react';

// const middleware = [...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }), 
//     logger,
// ];

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

// const store = configureStore({
//     reducer: {
//         contacts: persistReducer(contactsPersistConfig, formReducer),
//     },
//     middleware,
//     devTools: process.env.NODE_ENV === 'development',
// });

const store = configureStore({
    reducer: {
        contacts: formReducer,
    },
})

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;

