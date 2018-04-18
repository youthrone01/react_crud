import { createStore} from 'redux';
import appReducer from '../reducers/appreducer';

export default () => {
  const store = createStore(appReducer);
  return store;
};