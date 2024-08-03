import Database from "better-sqlite3"
import { IUser } from "./types"

const authDB = new Database("auth.db");

export const getAllUsers = ():IUser[] => {
    return authDB.prepare("SELECT * FROM users").all() as IUser[]
}

export const getUserByUsername = (username: string): IUser | undefined => {
    return authDB.prepare("SELECT * FROM users WHERE username = ?").get(username) as IUser | undefined;
}

export const addUser = (user: IUser): Database.RunResult => {
    return authDB
    .prepare(`
            INSERT INTO users(id, name, surname, username, salary)
            VALUES(@id, @name, @surname, @username, @salary)
        `).run(user);
}