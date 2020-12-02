import React from 'react'
import s from './Users.module.css'
import userIcon from '../../assets/images/userIcon.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    debugger
    return (
        <div className={s.item}>
            <div>
                {pages.map(p => {
                    return <button className={props.currentPage === p && s.selectedPage}
                        onClick={() => { props.onChangePage(p) }} key={p}>{p}</button>
                })}
            </div>

            {props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/Profile/' + u.id}><img className={s.userIcon}
                        src={u.photos.small != null ? u.photos.small : userIcon}
                        alt='user' />
                    </NavLink>
                </div>

                <div>name: {u.name}</div>
                <div>{u.status}</div>
                <div>id: {u.id}</div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                        className={s.button}
                        onClick={() => {
                            debugger
                            props.toggleFollowingProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "58ececdc-a9c9-45d2-be58-a15eb15ad48d"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                });

                        }}>unfollow</button>

                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                        className={s.button}
                        onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "58ececdc-a9c9-45d2-be58-a15eb15ad48d"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                });

                            props.follow(u.id)
                        }}>follow</button>

                }

            </div>
            )
            }

        </div>

    )
}

export default Users;