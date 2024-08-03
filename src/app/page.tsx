import { getAllUsers } from "../lib/api"
import { UserList } from "../lib/components/user-list"

export default function Page(){
    const list = getAllUsers()
    return <>
        <h1 className="is-size-2">Users</h1>
        <UserList users={list}/>
    </>
}