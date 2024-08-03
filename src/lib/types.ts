export interface IUser{
    id:number
    name:string
    surname:string
    username:string
    salary:number
    password:string
}

export type OptionalUser = Omit<IUser, 'id'>;