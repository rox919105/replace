const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING'
const SET_TOGGLE_FOLLOWING = 'SET_TOGGLE_FOLLOWING'


let initialState = {
        users: [],
        pageSize : 30,
        totalUsersCount : 0,
        currentPage : 1,
        isFetching : false,
        followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
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
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
       
            return {
                ...state, totalUsersCount: action.count
            }
        case SET_TOGGLE_IS_FETCHING:
        
            return {
                ...state, isFetching: action.isFetching
            }

        case SET_TOGGLE_FOLLOWING:
        debugger
            return {
                ...state,
                followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !=action.userId)
            }
      
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count : totalUsersCount})
export const toggleIsFethcing = (isFetching) => ({type: SET_TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: SET_TOGGLE_FOLLOWING, isFetching, userId})


export default usersReducer;