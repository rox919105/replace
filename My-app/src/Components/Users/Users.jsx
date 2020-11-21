import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userIcon from '../../assets/images/userIcon.png'


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        console.log(this.props.currentPage, 'hi')
        return (
            <div className={s.item}>
                <div>
                    {pages.map(p => {
                        return <button className={this.props.currentPage === p && s.selectedPage}
                            onClick={ () => {this.onChangePage(p)} } key={p}>{p}</button>
                    })}
                </div>

                {this.props.users.map(u => <div key={u.id}>
                    <div><img className={s.userIcon}
                        src={u.photos.small != null ? u.photos.small : userIcon}
                        alt='user' /></div>

                    <div>name: {u.name}</div>
                    <div>{u.status}</div>
                    <div>id: {u.id}</div>
                    {u.followed
                        ? <button className={s.button}
                            onClick={() => { this.props.unFollow(u.id) }}>unfollow</button>
                        : <button className={s.button}
                            onClick={() => { this.props.follow(u.id) }}>follow</button>
                    }

                </div>
                )
                }

            </div>

        )
    }
}

export default Users;