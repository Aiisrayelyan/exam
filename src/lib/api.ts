import Database from "better-sqlite3"
import { IUser, OptionalUser } from "./types"

const testDB = new Database("test.db");

export const addUser = (user: OptionalUser): Database.RunResult => {
    return testDB
    .prepare(`
            INSERT INTO users(name,surname,username, salary, password)
            VALUES(@name, @surname, @username, @salary, @password)
        `).run(user);
}

export const getAllUsers = ():IUser[] => {
    return testDB.prepare("SELECT * FROM users").all() as IUser[]
}