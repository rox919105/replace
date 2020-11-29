import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, toggleIsFethcing, setUsers, unFollow } from '../../state/usersReducer';
import Users from './Users'
import React from 'react'
import * as axios from 'axios'
import Preloader from '../../assets/images/Preloader.gif'

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFethcing(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,  {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFethcing(false)
            });
    }
    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFethcing(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFethcing(false)
            });
    }
    render() {
        return (<>
        { this.props.isFetching ? <img src={Preloader} alt='loading'/> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching
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

const UsersContainer = connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFethcing})(UsersContainerAPI);
export default UsersContainer;