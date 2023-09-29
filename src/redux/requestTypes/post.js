import axios from 'axios';
import Toast from 'react-native-toast-message';
import {baseURL} from '../../utils';
import errorHandler from '../../utils/errorHandler';
import {loaderStart, loaderStop} from '../actions';
import {store} from '../index';

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 30000;

function storeUpdate() {
  let user_authentication = store.getState()?.user?.userToken;
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${user_authentication}`;
}

export default async function postApi(
  endpoint,
  params = null,
  isFormData = false,
  successToast = true,
  startLoader = true,
  stopLoader = true,
) {
  let newParams = params;
  storeUpdate();
  if (startLoader) {
    loaderStart();
  }
  if (isFormData) {
    newParams = new FormData();
    for (let key in params) {
      newParams.append(key, params[key]);
    }
  }
  try {
    const response = await axios.post(endpoint, newParams, {
      headers: {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
        accept: 'application/json',
      },
    });
    if (stopLoader) {
      loaderStop();
    }
    {
      // successToast &&
      //   Toast.show({
      //     text1: response.data.message,
      //     type: 'success',
      //     visibilityTime: 5000,
      //   });
    }
    return response.data;
  } catch (e) {
    loaderStop();
    errorHandler(e);
    return null;
  }
}
