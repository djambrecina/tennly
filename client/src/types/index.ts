import rootReducer from 'core/store/rootReducer';

export type State = ReturnType<ReturnType<typeof rootReducer>>;
