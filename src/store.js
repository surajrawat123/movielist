import {createStore} from 'redux';
import rootReducer from './component/reducer';


const store = createStore(rootReducer);

export default store;