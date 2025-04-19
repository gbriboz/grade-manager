import { Grade } from "./Grade"
import { User } from "./User"

export interface Subject {
    id: number
    code: string
    name: string
    userId: number
    user: User
    grade?: Grade[]
}