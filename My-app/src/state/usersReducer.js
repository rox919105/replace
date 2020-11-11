const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
        users: [
        {id: 1, followed: false,
        photo:'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg',
        name: 'Rox', status: 'Hello',
        location:{country: 'Ukraine', city: 'Kovel'}},
        {id: 2, followed: true,
        photo:'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg',
        name: 'Andrew', status: 'Hello',
        location:{country: 'Ukraine', city: 'Zhutomyr'}},
        {id: 3, followed: false,
        photo:'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg',
        name: 'Arma', status: 'Hello',
        location:{country: 'Ukraine', city: 'Kuiv'}},
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => { if (u.id === action.userId){
                    return {...u, followed: true}}
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => { if (u.id === action.userId){
                    return {...u, followed: false}}
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default userReducer;