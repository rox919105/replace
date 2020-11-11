import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
    debugger
    return (
        <div>
            {props.users.map( u => <div key={u.id}>
                    <div><img src={u.photo} /></div>
                    {u.followed
                        ?<button onClick={ () => { props.unFollow(u.id)}}>unfollow</button>
                        :<button onClick={ () => { props.follow(u.id)}}>follow</button>
                    }

                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
                )
            }
           
        </div>
            
    )
}

export default Users;