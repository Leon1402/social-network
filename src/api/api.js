import * as axios from 'axios';

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": 'be4c8a1c-7c45-4ad8-a6ff-651d123abd13'
    }

})
export const UsersAxios = {
    getUsers: (pageSize, currentPage) => {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    getProfileInfo: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    }
}
export const AuthAxios = {
    setAuthData: () => {
        return instance.get(`/auth/me`)
            .then(response => response.data);
    }
}
