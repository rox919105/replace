import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, toggleFollowingProgress , toggleIsFethcing, setUsers, unFollow } from '../../state/usersReducer';
import Users from './Users'
import React from 'react'
import Preloader from '../../assets/images/Preloader.gif'
import { usersAPI } from '../../Api/Api';

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFethcing(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFethcing(false)
            });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFethcing(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFethcing(false)
            });
    }

    render() {
        return (<>
            { this.props.isFetching ? <img src={Preloader} alt='loading' /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}

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

/* const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
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

const UsersContainer = connect(mapStateToProps, { follow, unFollow, setUsers,
     setCurrentPage, setTotalUsersCount, toggleIsFethcing, toggleFollowingProgress })(UsersContainerAPI);
export default UsersContainer;