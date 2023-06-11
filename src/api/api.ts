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
  unFollowUser(userId:number){
    return axiosInstance.delete(`/follow/${userId}`)
      .then(res => res.data)
  }
}

export const ProfileAPI = {
  getProfile(userId:string){
    return axiosInstance.get(`/profile/${userId}`)
      .then(res => res.data)
  }
}

export const AuthAPI = {
  getAuth(){
    return axiosInstance(`/auth/me`)
      .then(res => res.data)
  }
}


