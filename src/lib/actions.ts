"use server"

import { OptionalUser } from "./types"
import bcrypt from "bcrypt"
import { addUser } from "./api"
import Database from 'better-sqlite3';
import { redirect } from "next/navigation";

const db = new Database('./test.db');

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{6,}$/;

function validateRegistration(username: string, password: string): { valid: boolean, message: string } {
    const existingUser = db.prepare('SELECT username FROM users WHERE username = ?').get(username);
    if (existingUser) {
        return { valid: false, message: 'Username is already taken.' };
    }

    if (!passwordRegex.test(password)) {
        return { valid: false, message: 'Password must be at least 6 characters long and include letters, numbers, and symbols.' };
    }

    return { valid: true, message: 'Validation successful.' };
}

export const handleAdd = async (prev: unknown, data: FormData) => {
    if (!data.get('name') || !data.get('surname') || !data.get('username') || !data.get('salary') || !data.get('password')) {
        return { message: 'please fill all of the fields' };
    }

    const salary = parseFloat(data.get('salary') as string);
    if (isNaN(salary)) {
        return { message: 'salary must be a number' };
    }

    const username = data.get('username') as string;
    const password = data.get('password') as string;

    const validation = validateRegistration(username, password);
    if (!validation.valid) {
        return { message: validation.message };
    }

    const user: OptionalUser = {
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        username: username,
        salary: salary,
        password: await bcrypt.hash(password, 10)
    };

    addUser(user);
    redirect('/');
}
