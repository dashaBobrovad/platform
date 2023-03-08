import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AppStore } from '../types/storeTypes';
import tableReducer from './reducers/tableReducer';

const rootReducer = combineReducers({
    table: tableReducer
  })

export type RootState = ReturnType<typeof rootReducer>;

const store:AppStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;