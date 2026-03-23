import { redirect } from "react-router-dom";

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const dateDiff = getTokenDuration();
  if (dateDiff < 0) {
    return "EXPIRED";
  }

  return token;
};

export const tokenLoader = () => {
  const token = getToken();
  return token;
};

export const checkAuthLoader = () => {
  const token = getToken();
  if (!token) {
    return redirect("/auth");
  }

  return null;
};

export const getTokenDuration = () => {
  const logoutTime = localStorage.getItem("expirationDate");

  const dateNow = new Date();
  const expDate = new Date(logoutTime);

  const dateDiff = expDate.getTime() - dateNow.getTime();
  return dateDiff;
};
