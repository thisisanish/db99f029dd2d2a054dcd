import Constants from "utils/Constants";
import Me from "utils/Me";
import HttpHelper from "utils/HttpHelperUtil";

const { Routes } = Constants.Urls.apis;

function getUserPayload(user) {
  return JSON.stringify(user);
};

async function handleAuthenticate(me) {
  if (!!me) {
    await localStorage.setItem("me", JSON.stringify(me));
  }
  return me;
};

function register(name, email, password, phone, age) {
  const payload = getUserPayload({ name, email, password, phone, age });
  return HttpHelper.postWithoutAuth(Routes.REGISTER, payload).then(handleAuthenticate);
};

function login(email, password) {
  const payload = getUserPayload({ email, password });
  return HttpHelper.postWithoutAuth(Routes.LOGIN, payload).then(handleAuthenticate);
};

function logout() {
  return HttpHelper.deleteWithAuthParam(Routes.LOGOUT)
    .finally(() => {
      localStorage.removeItem("me");
    });
};

function editProfile(name, country, address, home_currency) {
  const payload = getUserPayload({ name, country, address, home_currency });
  return HttpHelper.putWithAuthParam(Routes.USER, payload).then(handleAuthenticate);
}

function changePassword(current_password, password, password_confirmation) {
  const payload = getUserPayload({ current_password, password, password_confirmation });
  return HttpHelper.putWithAuthParam(Routes.USERS, payload);
};

function forgotPassword(email) {
  const payload = getUserPayload({ email });
  return HttpHelper.postWithoutAuth(Routes.FORGOT_PASSWORD, payload);
};

export const authService = {
  login,
  logout,
  register,
  editProfile,
  changePassword,
  forgotPassword,
};
