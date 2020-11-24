import React from 'react'
import s from './Users.module.css'
import userIcon from '../../assets/images/userIcon.png'


let Users = (props) =>{

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        console.log(props.currentPage, 'hi')


        return (
            <div className={s.item}>
                <div>
                    {pages.map(p => {
                        return <button className={props.currentPage === p && s.selectedPage}
                            onClick={ () => {props.onChangePage(p)} } key={p}>{p}</button>
                    })}
                </div>

                {props.users.map(u => <div key={u.id}>
                    <div><img className={s.userIcon}
                        src={u.photos.small != null ? u.photos.small : userIcon}
                        alt='user' /></div>

                    <div>name: {u.name}</div>
                    <div>{u.status}</div>
                    <div>id: {u.id}</div>
                    {u.followed
                        ? <button className={s.button}
                            onClick={() => { props.unFollow(u.id) }}>unfollow</button>
                        : <button className={s.button}
                            onClick={() => { props.follow(u.id) }}>follow</button>
                    }

                </div>
                )
                }

            </div>

        )
}

export default Users;