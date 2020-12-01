import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount,
      followSuccess, unfollowSuccess, toggleFollowingProgress,
      setUsers, unfollow, getUsers } from '../../state/usersReducer';
import Users from './Users'
import React from 'react'
import Preloader from '../../assets/images/Preloader.gif'

class UsersContainerAPI extends React.Component {
    
    componentDidMount() {
        
        debugger
        this.props.getUsers(this.props.currentPage, this.props.pageSize) 
    }

    onChangePage = (pageNumber) => {
       
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (<>
            { this.props.isFetching ? <img src={Preloader} alt='loading' /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followSuccess={this.props.unfollowSuccess}
                unfollowSuccess={this.props.unfollowSuccess}
            />
        </>)
    }
}


const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


const UsersContainer = connect(mapStateToProps, { followSuccess, unfollowSuccess, 
    follow, toggleFollowingProgress, unfollow, setUsers, setCurrentPage, setTotalUsersCount, getUsers })(UsersContainerAPI);
export default UsersContainer;






/* const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFethcing: (isFetching) => {
            dispatch(toggleIsFethcingAC(isFetching))
        },


    }
}; */
