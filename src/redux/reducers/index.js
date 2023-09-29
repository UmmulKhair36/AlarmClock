import {combineReducers} from 'redux';
import user from './user';
import loader from './loader';
import policies from './policies';

const allReducers = combineReducers({
  user,
  loader,
  policies,
});

export default allReducers;
