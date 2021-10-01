import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './form-actions';

// const items = createReducer([], {
//     [actions.addContact]: (state, { payload }) => [...state, payload],
//     [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
// });

const filter = createReducer('', {
    [actions.changeFilter]: (_, action) => action.payload,
});

const entities = createReducer([], {
  [actions.fetchContactSuccess]: (_, action) => action.payload
});

const isLoading = createReducer(false, {
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,
})

const error = createReducer(null, {
  [actions.fetchContactError]: (_, action) => action.payload,
  [actions.fetchContactRequest]: () => null,
})

// const items = (state = [], {type, payload}) => {
//     switch(type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload);

//         default:
//             return state;
//     }
// };


// const filter = (state = '', {type, payload}) => {
//     switch(type) {
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//             return state;
//     }
// };

export default combineReducers({
  entities,
  isLoading,
  error,
});
  
// export default combineReducers({
//   items,
//   filter, 
// });

