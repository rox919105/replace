import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userIcon from '../../assets/images/userIcon.png'


class Users extends React.Component {
    constructor(props) {
        debugger
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                    .then(response => {
                        this.props.setUsers(response.data.items);
                    })


    }
    render() {
        
        return (
            <div className={s.item}>
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