import styles from "./page.module.css";
import { getAllUsers } from "@/lib/api"

export default function Page(){
  const users = getAllUsers()
  return <>
      <div className={styles.users_div}>
            {users
                .map((user) => (
                    <div className={styles.user_card}>
                        <h2>{'NAME: ' + user.name}</h2>
                        <h3>{'SURNAME: ' + user.surname}</h3>
                        <h3>{'USERNAME: ' + user.username}</h3>
                        <h3>{'SALARY: ' + user.salary}</h3>
                    </div>
                ))}
        </div>
  </>
}