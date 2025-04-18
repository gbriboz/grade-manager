import Subject from "./Subject"

export interface User {
    id: number 
    name: string
    email: string
    password: string
    subjects?: Subject[]
}