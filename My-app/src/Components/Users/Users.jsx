import React from 'react'
import s from './Users.module.css'
import userIcon from '../../assets/images/userIcon.png'
import { NavLink } from 'react-router-dom'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
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
                            props.unfollow(u.id)
                        }}>unfollow</button>

                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                        className={s.button}
                        onClick={() => {
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