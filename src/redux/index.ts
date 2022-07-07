export { store, persistor } from './store';
export type { RootState, AppDispatch } from './store';

export {default as signupReducer} from './reducers/signup/reducer';
export {default as rootReducer } from './reducers/rootReducer';
export {default as userReducer } from './reducers/user/reducer';
export {default as offerReducer } from './reducers/offer/reducer';
export {default as pageReducer} from './reducers/page/reducer';

export * from './reducers/page';
export * from './reducers/offer';
export * from './reducers/signup';
export * from './reducers/user';