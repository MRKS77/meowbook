import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "3e839a62-868c-454a-a806-9f53b8868cef" },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI!");
    return profileAPI.getProfile(userId);
  },
  unfollow(id) {
    return instance.delete("follow/" + id);
  },
  follow(id) {
    return instance.post("follow/" + id);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile/`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me/`);
  },
  login(loginData) {
    return instance.post(`auth/login/`, loginData);
  },
  logout() {
    return instance.delete(`auth/login/`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url/`);
  },
};