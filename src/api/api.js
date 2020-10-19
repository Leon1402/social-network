import * as axios from 'axios';

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": '713673d8-e1c0-43a9-bf5b-8c152fd46242'
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
        console.warn('old method, use Profile Axios');
        return ProfileAxios.getProfileInfo(userId);
    }
}

export const ProfileAxios = {
    getProfileInfo: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status})
            .then(response => response.data);
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    }
}

export const AuthAxios = {
    setAuthData: () => {
        return instance.get(`/auth/me`)
            .then(response => response.data);
    },
    logIn: (properties) => {
        return instance.post(`auth/login`, {...properties})
            .then(response => response.data);
    },
    logOut: () => {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}
