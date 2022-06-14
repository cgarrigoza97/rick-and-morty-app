import { createStore, combineReducers, compose } from 'redux';
import { characterReducer } from "../reducer/characterReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    character: characterReducer
});

export const store = createStore(
    reducers,
    composeEnhancers()
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch