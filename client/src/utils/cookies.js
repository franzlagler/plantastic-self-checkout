import Cookies from "js-cookie";

export const getCookie = (key) => {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return null;
  }
};

export const setCookie = (key, value) => {
  Cookies.set(key, JSON.stringify(value), {
    expires: 0.5,
    sameSite: "Lax",
    secure: true,
  });
};

export const addItemToCookie = (key, newInput) => {
  const updatedCookie = getCookie(key);
  updatedCookie.push(newInput);
  setCookie(key, updatedCookie);
  return updatedCookie;
};

export const removeCookie = (key) => {
  Cookies.remove(key);
};

export const deleteItemFromCookie = (key, barcode) => {
  let updatedCookie = getCookie(key);
  updatedCookie = updatedCookie.filter((el) => el.barcode !== barcode);
  setCookie(key, updatedCookie);
  return updatedCookie;
};
