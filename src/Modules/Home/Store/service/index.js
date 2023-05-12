import API from "../../configs/api";
import apiMethod from "@utility/ApiMethod";

export const getHomeData = async (codeLanguage = "vi-VN") => {
  try {
    const { data } = await apiMethod.get(`/${codeLanguage}/${API.GET_BANNER}`);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getListProducts = (payload) => {
  const { page, size } = payload || {};
  return apiMethod.post(API.GET_LIST_PRODUCTS, { page, size });
};
