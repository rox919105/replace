import * as axios from 'axios'

const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "58ececdc-a9c9-45d2-be58-a15eb15ad48d"
    }

});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 30) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })

    },

    setProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    setAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
}
