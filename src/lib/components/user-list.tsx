import { IUser } from "../types"

interface IProps{
    users: IUser[]
}

export const UserList = ({users}:IProps) => {
    return <>
        <div className="columns">
            {
                users.map(user => <div className="column" key={user.id}>
                    <p>{user.name} {user.surname}</p>
                    <p>salary: {user.salary}</p>
                </div>)
            }
        </div>
    </>
}