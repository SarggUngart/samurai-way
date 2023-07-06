import axios from "axios";


const axiosInstance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true
})


export const UsersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  followUser(userId: number) {
    return axiosInstance.post(`/follow/${userId}`, {})
      .then(res => res.data)
  },
  unFollowUser(userId: number) {
    return axiosInstance.delete(`/follow/${userId}`)
      .then(res => res.data)
  }
}


export const ProfileAPI = {
  getProfile(userId: string) {
    return axiosInstance.get(`/profile/${userId}`)
      .then(res => res.data)
  },
  getStatusUserID(userId: string) {
    return axiosInstance.get(`/profile/status/${userId}`)
      .then(res => res.data)
  },
  changeStatus(status: string) {
    return axiosInstance.put(`profile/status`, {status})
      .then(res => res.data)
  }
}


export const AuthAPI = {
  me() {
    return axiosInstance.get(`/auth/me`)
      .then(res => res.data)
  },
  login(email: string, password: string, rememberMe: boolean) {
    return axiosInstance.post(`/auth/login`, {
      email,
      password,
      rememberMe
    })
  },
  logOut(){
    return axiosInstance.delete(`/auth/login`)
  }
}


