import { combineReducers } from 'redux';
import { characters, loading, error } from './starWarsReducer';

export default combineReducers({
  characters,
  loading,
  error,
});
