import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, 
    toggleFollowingProgress , toggleIsFethcing, setUsers, 
    unfollow, getUsersOnChangePage, getUsers } from '../../state/usersReducer';
import Users from './Users'
import React from 'react'
import Preloader from '../../assets/images/Preloader.gif'
import { withAuthRedirect } from '../Hoc/withAuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber) => {
        this.props.getUsersOnChangePage(pageNumber, this.props.pageSize)
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
            />
        </>)
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer)

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


export default connect(mapStateToProps, { follow, unfollow, setUsers,
     setCurrentPage, setTotalUsersCount, toggleIsFethcing, 
     toggleFollowingProgress, getUsers, getUsersOnChangePage })(AuthRedirectComponent);
