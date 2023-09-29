import Toast from "react-native-toast-message";
import postApi from "../requestTypes/post";
import getApi from "../requestTypes/get";
import deleteApi from "../requestTypes/delete";
import * as EmailValidator from "email-validator";
import { logoutUser, saveToken, saveUser } from "../actions";
import endpoints from "./endpoints";
import NavService from "../../utils/NavService";
import { Platform } from "react-native";

var passwordValidator = require("password-validator");
var schema = new passwordValidator();
schema.is().min(8).is().max(50);

const errorToast = (message) => {
  Toast.show({
    text1: message,
    type: "error",
    visibilityTime: 3000,
  });
};

export async function login(email, password) {
  if (!email || !password) return errorToast("Please enter email and password");
  if (!EmailValidator.validate(email))
    return errorToast("Please enter valid email");
  if (!schema.validate(password))
    return errorToast("Password not valid (Use at least eight character)");

  const params = {
    email,
    password,
  };

  const data = await postApi(endpoints.login, params);

  if (data?.success) {
    NavService.reset(0, [{ name: "AppStack" }]);
    saveUser(data?.data.user);
    saveToken(data?.data?.token);
  }
}
