import { axiosInstance } from "./host";

export const HttpRequestHub = (config = null) => {
    return axiosInstance(config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return null;
    });
};

export const loginUser = (obj) => {
    const config = {
      method: "POST",
      url: `/api/auth/login`,
      data: { ...obj },
    };
    return HttpRequestHub(config);
  };
  
  export const resetPassword = (obj) => {
    const config = {
      method: "POST",
      url: `/api/auth/editPassword`,
      data: { ...obj },
    };
    return HttpRequestHub(config);
  };
  
  export const getUserInfo = () => {
    const config = {
      method: "GET",
      url: `/api/auth/me`,
    };
    return HttpRequestHub(config);
  };
  
  export const getFile = (hashId) => {
    const config = {
      method: "GET",
      url: `/api/client/file/preview/${hashId}`,
    };
    return HttpRequestHub(config);
  };
  