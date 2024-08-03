import { addUser, getUserByUsername } from "./api";
import { nanoid } from "nanoid"
import { IUser } from "./types";

function validateRegistration(name: string, surname: string, username: string, salary: number): { valid: boolean, message: string } {
    const isUserExist = getUserByUsername(username);

    if (isUserExist) {
        return { valid: false, message: 'User with this username already exists' };
    }

    if(salary <= 0) {
        return { valid: false, message: "User can't have zero or negative salary" };
    }

    return { valid: true, message: 'Validation successful.' };
}

export const handleAddUser = async (prev: unknown, data: any): Promise<{ message: string, user?: IUser }> => {
    const name = data.get('name') as string;
    const surname = data.get('surname') as string;
    const username = data.get('username') as string;
    const salary = data.get('salary') as number;

    if (!name || !surname || !username || !salary) {
        return { message: 'Please fill all of the fields' };
    }

    const validation = validateRegistration(name, surname, username, salary);
    if (!validation.valid) {
        return { message: validation.message };
    }

    const user: IUser = {
        id: nanoid(),
        name,
        surname,
        username,
        salary
    };

    addUser(user);

    return {
        message: 'Added user',
        user: {
            id: user.id,
            name,
            surname,
            username,
            salary
        }
    };
};
