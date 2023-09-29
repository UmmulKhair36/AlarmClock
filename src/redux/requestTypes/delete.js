import axios from 'axios';
import {store} from '../index';
import {loaderStart, loaderStop} from '../actions';
import {baseURL} from '../../utils';
import errorHandler from '../../utils/errorHandler';

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 30000;

function storeUpdate() {
  let user_authentication = store.getState()?.user?.userToken;

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${user_authentication}`;
}

export default async function deleteApi(
  endpoint,
  params = {},
  startLoader = true,
  showError = true,
  defaultError = true,
) {
  storeUpdate();
  if (startLoader) {
    loaderStart();
  }
  try {
    const response = await axios.delete(endpoint, {params});
    loaderStop();
    return response.data;
  } catch (e) {
    loaderStop();
    errorHandler(e, showError, defaultError);
    return null;
  }
}
